import React from 'react'
import Navbar from '@/app/components/Navbar'
import BlogBar from '@/app/components/BlogBar'
import BlogCategories from '@/app/components/Categories'


export default function Page() {
  return (
    <div className='min-h-screen w-full flex flex-col'>
      <BlogBar/>
      <div className='pt-[60px]'></div>
      <div className='w-[1000px] mx-auto flex gap-3'>
        <div className='w-full'>
          <BlogCategories/>
        </div>
        <div className='w-full'></div>
      </div>
    </div>
  )
}
