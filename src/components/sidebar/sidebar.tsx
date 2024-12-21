
import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-[20%] fixed top-0 left-0 h-screen bg-white text-slate-500 flex-col lg:text-4xl sm:text-3xl z-10 hidden sm:block">
      <div className="flex flex-col h-full ml-4 gap-[40px]">
        <div className="flex place-items-center flex-row justify-self-start w-[20rem] mt-10">
     <img
           width={'20'} height={'20'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFklEQVR4nO2YW4hOURTHfzPuM7mUGCFSGg+e3OJBLmnywiSFmaKRy/CgREzIm5TL5JKEokQMCkMahlzKg2JyjygNGh7kkihDzNGu9dVuO+d8+zt7fzOazr923/edvfda/7W+tdde60CKFClSdGYMA1YAx4EHwAegDfgGNAOXgQ1AKf8RugCVwC0hG1iMNuAqMKGjyVcALy1Jh40/QC3Qvb2Jl4rHA0/jGtC7vchXA989kg80I/L6T/QAjuSBeKCNnfki3w+4nWfygZyJ8b7JD5SUmCuZn0CDkMpl3xWf5IuApoTe3CQyLoXMnQbGAI8jUuxIH+QLgbMJyf8CBomcR8bcAZHdNcY563wYsMohlu+JjGIjhLZql9+JmP0XXcn3Bz5ZEP0I3Ax5fljkDNXCIuPVAots9sLVgG2Wnp4lhF5HpMMiCaelGvn9FnK/uJBX8dlioeSthEJP4Icxt0OTN037XmvpGFX8JcZUSyW7Zf3kkLm6ELlbcjhD71wMWGupZKGsXxwyd8eQ2QuYCcwDyoEpwDhgfYTsuy4G2JYLo2V9jfH8vTaXDQsiZGeSQCKcszRA3dAKq7VnLUazojw9FhgAdANKpFSoluItqn+ocjGg3tKAPrK+Un6/MW7QRQnKiED2ZC7BRDhmqUhlH4UR0i6qzwxUrP9OQD7wUQtttlSkEx6sfS+X3B8kHHNcDZhtqagsZK/KNK0O5J/KPeSEYksSK0P2Ku/tk/LiOfAKeAicl3vgVBaZc/GEC1kUXdcOcS4YEiOzEY+YEaOoTtrLDEokRcahr1x4zyJkfjXOlBNUfbMkIovsMmK0TBr8VimhVQY7BGyXUqNempZsh7rKB/HhwDKJXVOBKtaWG+vLHQ9soDU4zrX/kxgFzSGNdoVjqgxk3LAIv8SdV5uEhDJQR03CG9YcTQkTwT+YH1FNTjTWqYN71APxALgv9ZEXFEi71yiHb1LMBefjjVyDL88ngUp1JxOGkOqy1ojDOhyjgD2WrednaSWdKsx8oVDe8asUuxc4Iw3RQWAjML0jXp2nSJEiRYrOi78cStU0T6dTcwAAAABJRU5ErkJggg=="
            alt="spinach"
          />
          <h1 className="font-bold text-black">Quql.</h1>
        </div>
        <section>
          {/* Link list starts here */}
          <ul className="flex flex-col h-auto gap-5">
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
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
