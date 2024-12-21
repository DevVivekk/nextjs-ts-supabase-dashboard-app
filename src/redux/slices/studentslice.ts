import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Defining a type for the student object
interface Student {
  id: string;
  studentName: string;
  cohort: string;
  courses: string[];
  status: boolean;
  'Date Joined'?: Date;
  'Last Login'?: Date;
}
//stiudent interface
interface StudentState {
  students: Student[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: StudentState = {
  students: [],
  status: 'idle', // initial status to 'idle'
  error: null,
};

export const fetchStudents = createAsyncThunk<Student[]>(
  'students/fetchStudents',
  async () => {
    const response = await axios.get('/api/read');
    return response.data; 
  }
);

// Create the slice for the students
export const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    // Add a new student only for logical purpose, new student are added straight to store via api call 
    addStudent: (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    },

    // Delete a student by id
    deleteStudent: (state, action: PayloadAction<string>) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },

    // Update a student by id
    updateStudent: (state, action: PayloadAction<Student>) => {
      const { id, studentName, cohort, courses, status} = action.payload;
      const studentIndex = state.students.findIndex(student => student.id === id);
      if (studentIndex !== -1) {
        state.students[studentIndex] = {...state.students[studentIndex],
          id,
          studentName,
          cohort,
          courses,
          status,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch students';
      });
  }
});

export const { addStudent, deleteStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
