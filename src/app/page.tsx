import Navbar from '@/components/navbar/navbar'
import Sidebar from '@/components/sidebar/sidebar'
import Table from '@/components/tables/tabel'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-row w-full bg-blue-50">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="sm:ml-[20%] p-5 w-full flex flex-col place-items-start">
        <Navbar />
        <Table />
      </div>
    </div>
  )
}

export default Page;
