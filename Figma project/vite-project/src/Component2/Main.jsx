import React from 'react'

function Main() {
  return (
    <div className='flex justify-center mt-5'>
       <div className="flex justify-start w-[90vw] text-[15px] font-semibold ">
        <a className='border-[1px]  rounded-full px-[15px] py-[8px] bg-black text-white font-medium' href="/">Outdoor Plant</a>
        <a className='border-[1px] border-black rounded-full px-[15px] py-[8px]' href="/">Indoor Plant</a>
        <a className='border-[1px] border-black rounded-full px-[15px] py-[8px]' href="/">Flower Pot</a>
        <a className='border-[1px] border-black rounded-full px-[15px] py-[8px]' href="/">Potted Plant</a>
        <a   className='border-[1px] ml-[55%] border-black rounded-full px-[15px] py-[8px] ' href="/">See All</a>
       </div>
    </div>
  )
}

export default Main
