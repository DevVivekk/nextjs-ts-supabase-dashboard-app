'use client';
import React from 'react';
import CustomSidebar from '../sidebar/customSidebar';


const Navbar = () => {
  const handleSidebar = ()=>{
    document.getElementById('sidebar')!.style.right='0rem'
  }
  return (
    <div className="flex flex-row w-full h-[7rem] place-items-center justify-between min-w-full">
      <section className="sm:w-[60%] w-[80%] relative h-[5rem] rounded-lg flex flex-row place-items-center gap-9 bg-white">
        <svg
          className="ml-3"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 30 30"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
        <input
          className="w-[80%] h-full text-2xl border-none rounded-lg outline-none text-black"
          type="search"
          placeholder="Search your course"
        />
      </section>

      {/* Navbar icons this will be hidden on mobile, shown on sm screens and above) */}
      <div className="hidden sm:flex flex-row ml-1 mr-1 gap-10 items-center">
   <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios/50/help--v1.png"
          alt="help--v1"
          className="min-w-[30px] min-h-[30px]"
        />
        <div className="relative">
          <span className="w-5 h-5 absolute top-0 right-0 bg-red-700 rounded-full"></span>
     <img
            width="30"
            height="30"
            src="https://img.icons8.com/windows/32/speech-bubble-with-dots.png"
            alt="speech-bubble-with-dots"
            className="min-w-[30px] min-h-[30px]"
          />
        </div>
   <img
          width="30"
          height="30"
          src="https://img.icons8.com/forma-light/48/switch.png"
          alt="switch"
          className="min-w-[30px] min-h-[30px]"
        />
        <div className="relative">
          <span className="w-5 h-5 absolute top-0 right-0 bg-red-700 rounded-full"></span>
     <img
            width={'30'}
            height={'30'}
            src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=000000"
            alt="alarm"
            className="min-w-[30px] min-h-[30px]"
          />
        </div>
      </div>

      {/* User Section */}
      <section className="flex flex-row place-items-center gap-4">
   <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/user.png"
          alt="user"
          onClick={handleSidebar}
        />
        <h2 className="sm:block hidden font-semibold text-black text-2xl">Adeline H. Dancy</h2>
        <div className="relative border border-solid border-violet-60 z-100 top-0"><CustomSidebar /></div>
      </section>
    </div>
  );
};

export default Navbar;
