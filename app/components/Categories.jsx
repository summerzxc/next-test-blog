import React from 'react'

export default function BlogCategories() {
  return (
    <div className='w-full border-b poppins flex gap-6 pb-[14px]'>
        <span className='cursor-pointer text-[14px] hover:underline tracking-tight underline-offset-[20px]'>For you</span>
        <span className='cursor-pointer text-[14px] hover:underline tracking-tight underline-offset-[20px]'>Following</span>
        <span className='cursor-pointer text-[14px] hover:underline tracking-tight underline-offset-[20px]'>Self Improvement</span>
        <span className='cursor-pointer text-[14px] hover:underline tracking-tight underline-offset-[20px]'>Data Science</span>
        <span className='cursor-pointer text-[14px] hover:underline tracking-tight underline-offset-[20px]'>Travel</span>
    </div>
  )
}
