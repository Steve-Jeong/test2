import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='p-4'>
      <div className="flex flex-col">
        <Link href={"/"} className='pb-2'>
          <h1 className="text-3xl font-bold ">Home</h1>
        </Link>

        <div className="flex gap-4">
          <Link href="/users" className="font-bold">
            Users
          </Link>
          <Link href="/headers" className="font-bold">
            Headers
          </Link>
          <Link href="/blog/myBlog" className="font-bold">
            Blogs
          </Link>
          <Link href="/todos" className="font-bold">
            Todos
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NavBar
  