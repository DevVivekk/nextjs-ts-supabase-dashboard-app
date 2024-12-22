import { hitApi } from '@/CustomApi/apihit';
import { deleteStudent, fetchStudents, updateStudent } from '@/redux/slices/studentslice';
import { AppDispatch } from '@/redux/store';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface ModalProps {
  isOpen: boolean;
  studentData: {
    studentName: string;
    cohort: string;
    courses: string[];
    status: boolean;
    id: string;
  } | null;
  onClose: () => void;
};

const Modal = ({ isOpen, studentData, onClose }: ModalProps) => {
  const dispatch:AppDispatch = useDispatch()
  const [studentName, setStudentName] = useState<string>('');
  const [cohort, setCohort] = useState<string>('');
  const [courses, setCourses] = useState<string[]>([]);
  const [status, setStatus] = useState<boolean>(false);
  const [id, setId] = useState<string>('');

  // Updating the state when studentData changes
  useEffect(() => {
    if (isOpen && studentData) {
      setStudentName(studentData.studentName);
      setCohort(studentData.cohort);
      setCourses(studentData.courses);
      setStatus(studentData.status);
      setId(studentData.id);
    }
  }, [isOpen, studentData]);

  const handleSave = async () => {
    const res = await hitApi({
      method: 'PUT',
      url: '/api/update',
      id,
      body: { studentName, cohort, courses, status }
    });

    if (res === 201) {
      dispatch(updateStudent({studentName,cohort,courses,status,id}))
      alert('Data saved successfully');
    } else {
      alert('Failed request!');
    }

//    console.log('Saved student data:', { studentName, cohort, courses, status });
    onClose();
  };
  const handleDelete = async () => {
    const res = await hitApi({
      method: 'DELETE',
      url: '/api/delete',
      id,
    });

    if (res === 201) {
      dispatch(deleteStudent(id))
      alert('Data delete successfully');
    } else {
      alert('Failed request!');
    }

    //console.log('Saved student data:', { studentName, cohort, courses, status });
    onClose();
  };
  const handleAdd = async () => {
    const res = await hitApi({
      method: 'POST',
      url: '/api/save',
      id,
      body: { studentName, cohort, courses, status }
    });

    if (res === 201) {
      dispatch(fetchStudents());
      alert('Data saved successfully');
    } else {
      alert('Failed request!');
    }

    //console.log('Saved student data:', { studentName, cohort, courses, status});
    onClose(); 
  };

  if (!isOpen) return null; // If the modal is not open, then return null

  return (
    <div className="fixed inset-0 text-[1.5rem] z-50 top-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[40rem] md:w-[50rem]">
        <h2 className="font-semibold mb-6">Edit Student Info</h2>

        <div className="mb-6">
          <label className="block font-medium text-gray-700">Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[1.5rem]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-[1.5rem] font-medium text-gray-700">Cohort</label>
          <input
            type="text"
            value={cohort}
            onChange={(e) => setCohort(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[1.5rem]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-[1.5rem] font-medium text-gray-700">Courses</label>
          <textarea
            value={courses.join(', ')}
            onChange={(e) =>
              setCourses(e.target.value.split(',').map((course) => course.trim()))
            }
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-[1.5rem]"
            rows={4}
          />
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            checked={status}
            onChange={() => setStatus((prev) => !prev)}
            className="mr-4"
          />
          <label className="text-[1.5rem] font-medium text-gray-700">Active Status</label>
        </div>

        <div className="flex justify-end">
         {studentData? <><button
            onClick={onClose}
            className="mr-4 px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Save
          </button>
          <button
            onClick={handleDelete}
            className="ml-4 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Delete
          </button></>:<>
          <button
            onClick={handleAdd}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="px-6 ml-4 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Close
          </button>
          </>
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;
