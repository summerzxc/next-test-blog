import React from 'react'
import WideBlog from '../../blog-page/comp/WideBlog';

export default function MyBlogs() {
  return (
    <div className='w-full flex flex-col'>
      <WideBlog/>
      <WideBlog/>
      <WideBlog/>
    </div>
  )
}
