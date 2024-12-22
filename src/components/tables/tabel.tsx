// @ts-nocheck
'use client';
import React, { useEffect, useState } from 'react'
import Modal from '@/assets/popup/popupModa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '@/redux/slices/studentslice';
import { AppDispatch, RootState } from '@/redux/store';

interface Student {
  studentName: string;
  cohort: string;
  courses: string[];
  status: boolean;
  id:string;
};
const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentData, setStudentData] = useState<Student | null>(null);
  const data = useSelector((state:RootState)=>state.studentReducer.students);
  const status = useSelector((state: RootState) => state.studentReducer.status);
  const error = useSelector((state: RootState) => state.studentReducer.error);
  //console.log(data);
  const dispatch: AppDispatch = useDispatch(); 
  useEffect(()=>{
    if (status === 'idle') {
    dispatch(fetchStudents());
    }
  },[dispatch,status])

  //functions for formatting date and time client side only
  function formatDateJoined(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    const dateObject = new Date(String(date));
    return dateObject.toLocaleDateString('en-GB', options).replace(/ /g, '.');
  }
  
  function formatLastLogin(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
    const dateObject = new Date(String(date));
    const formattedTime = dateObject.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();
    return dateObject.toLocaleDateString('en-GB', options).replace(/ /g, '.')+" "+formattedTime;
  }
  if (status === 'loading') {
    return (
      <div className="flex flex-row place-items-center w-full justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-8 border-t-transparent border-blue-200 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex justify-center place-items-centerw w-full min-h-screen text-red-200 text-xl">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className='w-full min-h-[100vh] bg-white p-2 rounded-lg text-black'>
      <section className='flex flex-row gap-5 justify-between p-4'>
        <section className='flex flex-row gap-5 w-full flex-wrap'>

          {/* First select box */}
          <div className="relative w-full sm:w-[20rem] md:w-[24rem]">
            <select className="w-full bg-blue-100 h-[4.5rem] text-3xl rounded-lg p-4 pr-8 appearance-none hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option value={'AY 2024-25'} className="hover:bg-blue-300">AY 2024-25</option>
              <option value={'AY 2023-24'} className="hover:bg-blue-300">AY 2023-24</option>
            </select>
            <div className="absolute top-0 right-0 h-full flex items-center justify-center pointer-events-none pr-4">
   <img    className="w-15 h-10 pr-8" src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png" alt="expand-arrow--v1"/>
            </div>
          </div>
          
          {/* Second select box */}
          <div className="relative w-full sm:w-[20rem] md:w-[24rem]">
            <select className="w-full bg-blue-100 h-[4.5rem] text-3xl rounded-lg p-4 pr-8 appearance-none hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option value={'CBSE 9'} className="hover:bg-blue-300">CBSE 9</option>
              <option value={'CBSE 10'} className="hover:bg-blue-300">CBSE 10</option>
            </select>
            <div className="absolute top-0 right-0 h-full flex items-center justify-center pointer-events-none pr-4">
   <img    className="w-15 h-10 pr-8" src="https://img.icons8.com/ios-filled/50/expand-arrow--v1.png" alt="expand-arrow--v1"/>
            </div>
          </div>
        </section>

        {/* Add new student button */}
        <section>
          <div className='w-full sm:w-[24rem] h-auto p-2 flex flex-row justify-center gap-10 place-items-center rounded-lg bg-blue-200'>
            <span className='text-6xl'>+</span>
            <button onClick={()=>{setStudentData(null);setIsModalOpen(true)}} className='text-3xl'>Add new Student</button>
          </div>
        </section>
      </section>

      {/* Scrollable container for the table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[70rem] table-auto border-collapse text-2xl">
          <thead>
            <tr className="text-left border-b border-solid border-gray-300 text-2xl font-extrabold text-gray-700">
              <th className="py-3 px-4">Student Name</th>
              <th className="py-3 px-4">Cohort</th>
              <th className="py-3 px-4">Courses</th>
              <th className="py-3 px-4">Date Joined</th>
              <th className="py-3 px-4">Last Login</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) => {
              //console.log(item)
              return (
                <tr
  onClick={() => {
    setStudentData({
      status: item.status,
      studentName: item.studentName,
      cohort: item.cohort,
      courses: item.courses,
      id:item.id?item.id:''
    });
    setIsModalOpen(true);
  }}
  key={index}
  className="border-b border-solid border-gray-300 cursor-pointer"
>
                  <td className="py-3 px-4">{item.studentName}</td>
                  <td className="py-3 px-4">{item.cohort} A</td>
                  <td className="py-3 px-4">
                    <div className='flex flex-wrap gap-3'>
                      {/* Course 1 */}
                      <section className='flex flex-row items-center max-w-[250px]'>
             <img  width="30" height="30" src="https://img.icons8.com/bubbles/100/user.png" alt="user"/>
                        <span className='p-1.5 rounded-md bg-blue-100 w-[120px] text-center truncate'>{item.courses[0]}</span>
                      </section>
                      {/* Course 2 */}
                      <section className='flex flex-row items-center max-w-[250px]'>
             <img  width="30" height="30" src="https://img.icons8.com/bubbles/100/user.png" alt="user"/>
                        <span className='p-1.5 rounded-md bg-blue-100 w-[120px] text-center truncate'>{item.courses[1]}</span>
                      </section>
                    </div>
                  </td>
                  <td className="py-3 px-4">{formatDateJoined(item.dateJoined)}</td>
                  <td className="py-3 px-4">{formatLastLogin(item.lastLogin)}</td>
                  <td className="py-3 px-4"><span className={`w-6 h-6 rounded-full inline-block ${item.status ? 'bg-green-500' : 'bg-red-500'}`}></span></td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    {/* Modal to display student data and to update or delete it */}
    {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          studentData={studentData} 
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Table;
