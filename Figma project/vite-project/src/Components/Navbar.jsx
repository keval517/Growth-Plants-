import React from 'react'
import Search from '../Icons/Search'


function Navbar() {
  return (
    <div className="flex justify-center ">

        <div className='w-[90vw] h-[80px] mt-4 flex text-white max-sm:mt-0'>
          <div className="text-[30px] w-full h-full flex items-center gap-[2px] max-sm:text-[10px]">
            <a className='border-[1px] rounded-full px-[30px] py-[8px] max-sm:px-[10px] max-sm:py-[4px]' href="/">Home</a>
            <a className='border-[1px] rounded-full px-[30px] py-[8px] max-sm:px-[10px] max-sm:py-[4px]' href="/">Contact</a>
            <a className='border-[1px] rounded-full px-[30px] py-[8px] max-sm:px-[10px] max-sm:py-[4px]' href="/">Blog</a>
          </div>

          <div className="flex justify-end w-full h-full max-sm:w-full  items-center text-[30px] gap-[1px] max-sm:text-[10px]">
          <Search/>
            <a className='border-[1px] rounded-full px-[30px] py-[8px] max-sm:px-[10px] max-sm:py-[4px]'  href="#1">Shop</a>
            <a className='border-[1px] rounded-full px-[30px] py-[8px] max-sm:px-[10px] max-sm:py-[4px]' href="/">Log In</a>
          </div>
        </div>
    </div>
  )
}

export default Navbar
