import React from 'react'

function Search() {
  return (
    <div>
<div
  className="  overflow-hidden  w-[40px] h-[40px] hover:w-[250px]  border-[1px] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300  duration-300
  // max-sm:overflow-hidden  max-sm:w-[30px] max-sm:h-[30px] max-sm:hover:w-[150px]  max-sm:border-[1px] max-sm:shadow-[2px_2px_20px_rgba(0,0,0,0.08)] max-sm:rounded-full max-sm:flex group max-sm:items-center max-sm:hover:duration-100  max-sm:duration-100"
>
  <div className="flex items-center justify-center fill-white p-2 max-sm:p-2 ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Isolation_Mode"
      data-name="Isolation Mode"
      viewBox="0 0 24 24"
      className='w-[20px] h-[20px] max-sm:w-[12px] max-sm:h-[12px]'
    >
      <path
        d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
      ></path>
    </svg>
  </div>
  <input
    type="text"
    className="outline-none text-[20px] bg-transparent w-full text-white font-semibold px-2 "
  />
</div>

    </div>
  )
}

export default Search
