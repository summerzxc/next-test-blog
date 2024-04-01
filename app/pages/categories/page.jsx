import Categories from '@/app/components/OP_Categories'
import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function Page() {
  return (
    <div className='min-h-screen w-full flex flex-col pb-[80px]'>
      <Navbar/>
      <div className='pt-[60px]'></div>
      <div className='w-[800px] mx-auto flex flex-col gap-8'>
        <h1 className='text-3xl text-center'>カテゴリ一覧</h1>
        <Categories/>
      </div>
    </div>
  )
}
