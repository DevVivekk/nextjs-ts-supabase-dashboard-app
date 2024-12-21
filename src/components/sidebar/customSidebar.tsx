
import React from 'react'

const CustomSidebar = () => {
    const closeSidebar = ()=>{
        document.getElementById('sidebar')!.style.right='-50rem'
      }
  return (
    <div id='sidebar' className="w-[30rem] border-r-emerald-300 border-solid border fixed top-0 right-[-50rem] h-screen bg-white text-slate-500 flex-col text-3xl z-10 transition-all duration-500 ease-in-out">
      <div className="flex flex-col h-full ml-4 gap-[40px]">
        {/* Front header part of sidebar starts */}
        <div className="flex place-items-center relative flex-row justify-between gap-10 w-full mt-10">
            <section className='flex flex-row place-items-center ml-2'>
     <img
            width={'20'} height={'20'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFklEQVR4nO2YW4hOURTHfzPuM7mUGCFSGg+e3OJBLmnywiSFmaKRy/CgREzIm5TL5JKEokQMCkMahlzKg2JyjygNGh7kkihDzNGu9dVuO+d8+zt7fzOazr923/edvfda/7W+tdde60CKFClSdGYMA1YAx4EHwAegDfgGNAOXgQ1AKf8RugCVwC0hG1iMNuAqMKGjyVcALy1Jh40/QC3Qvb2Jl4rHA0/jGtC7vchXA989kg80I/L6T/QAjuSBeKCNnfki3w+4nWfygZyJ8b7JD5SUmCuZn0CDkMpl3xWf5IuApoTe3CQyLoXMnQbGAI8jUuxIH+QLgbMJyf8CBomcR8bcAZHdNcY563wYsMohlu+JjGIjhLZql9+JmP0XXcn3Bz5ZEP0I3Ax5fljkDNXCIuPVAots9sLVgG2Wnp4lhF5HpMMiCaelGvn9FnK/uJBX8dlioeSthEJP4Icxt0OTN037XmvpGFX8JcZUSyW7Zf3kkLm6ELlbcjhD71wMWGupZKGsXxwyd8eQ2QuYCcwDyoEpwDhgfYTsuy4G2JYLo2V9jfH8vTaXDQsiZGeSQCKcszRA3dAKq7VnLUazojw9FhgAdANKpFSoluItqn+ocjGg3tKAPrK+Un6/MW7QRQnKiED2ZC7BRDhmqUhlH4UR0i6qzwxUrP9OQD7wUQtttlSkEx6sfS+X3B8kHHNcDZhtqagsZK/KNK0O5J/KPeSEYksSK0P2Ku/tk/LiOfAKeAicl3vgVBaZc/GEC1kUXdcOcS4YEiOzEY+YEaOoTtrLDEokRcahr1x4zyJkfjXOlBNUfbMkIovsMmK0TBr8VimhVQY7BGyXUqNempZsh7rKB/HhwDKJXVOBKtaWG+vLHQ9soDU4zrX/kxgFzSGNdoVjqgxk3LAIv8SdV5uEhDJQR03CG9YcTQkTwT+YH1FNTjTWqYN71APxALgv9ZEXFEi71yiHb1LMBefjjVyDL88ngUp1JxOGkOqy1ojDOhyjgD2WrednaSWdKsx8oVDe8asUuxc4Iw3RQWAjML0jXp2nSJEiRYrOi78cStU0T6dTcwAAAABJRU5ErkJggg=="
            alt="spinach"
          />
          <h1 className="font-bold text-black">Quql.</h1>
          </section>
     <img onClick={closeSidebar} className='mr-10' width="25" height="25" src="https://img.icons8.com/ios-glyphs/50/delete-sign.png" alt="delete-sign"/>
        </div>
         {/* Front header part of sidebar ends */}

        <section>
        {/* {Navigation icons starts} */}
        <div className="flex justify-center mb-10 flex-row gap-10 items-center">
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
            {/* {Navigation icons ends} */}

            {/* Link list starts */}
          <ul className="flex flex-col h-auto gap-8">
            <div className="w-full p-[1.5rem] hover:bg-slate-200 hover:cursor-pointer hover:rounded-lg">
              <div className="flex flex-row gap-[15px] w-[20rem] place-items-center">
     <img   
                  width="24"
                  height="24"
                  src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/96/external-dashboard-basic-user-interface-anggara-basic-outline-anggara-putra.png"
                  alt="external-dashboard-basic-user-interface-anggara-basic-outline-anggara-putra"
                />
                <li>Dashboard</li>
              </div>
            </div>
            <div className="w-full p-[1.5rem] hover:bg-slate-200 hover:cursor-pointer hover:rounded-lg">
              <div className="flex flex-row gap-[15px] w-[20rem] place-items-center">
   <img    width="24" height="24" src="https://img.icons8.com/ios-filled/50/hide-sidepanel.png" alt="hide-sidepanel"/>
                <li>Students</li>
              </div>
            </div>
            <div className="w-full p-[1.5rem] hover:bg-slate-200 hover:cursor-pointer hover:rounded-lg">
              <div className="flex flex-row gap-[15px] w-[20rem] place-items-center">
   <img    width="24" height="24" src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/external-bookmark-file-and-document-anggara-glyph-anggara-putra.png" alt="external-bookmark-file-and-document-anggara-glyph-anggara-putra"/>
                <li>Chapter</li>
              </div>
            </div>
            <div className="w-full p-[1.5rem] hover:bg-slate-200 hover:cursor-pointer hover:rounded-lg">
              <div className="flex flex-row gap-[15px] w-[20rem] place-items-center">
   <img    width="24" height="24" src="https://img.icons8.com/windows/32/help.png" alt="help"/>
                <li>Help</li>
              </div>
            </div>
            <div className="w-full p-[1.5rem] hover:bg-slate-200 hover:cursor-pointer hover:rounded-lg">
              <div className="flex flex-row gap-[15px] w-[20rem] place-items-center">
   <img    width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/50/pie-chart.png" alt="pie-chart"/>
                <li>Reports</li>
              </div>
            </div>
            <div className="w-full p-[1.5rem] hover:bg-slate-200 hover:cursor-pointer hover:rounded-lg">
              <div className="flex flex-row gap-[15px] w-[20rem] place-items-center">
     <img   
                  width="24"
                  height="24"
                  src="https://img.icons8.com/?size=100&id=14099&format=png&color=000000"
                  alt="external-dashboard-basic-user-interface-anggara-basic-outline-anggara-putra"
                />
                <li>Settings</li>
              </div>
            </div>
          </ul>
            {/* Link list ends */}
        </section>
      </div>
    </div>
  );
}

export default CustomSidebar;
