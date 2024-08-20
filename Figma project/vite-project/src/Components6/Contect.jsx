import React from 'react'
import First from './First'
import Line from './Line'

function Contect() {
  return (
    <>
    
    <div className="border-solid border-[7px] border-white rounded-[30px] bg-cover h-screen bg-center  bg-no-repeat bg-[url('last.png')] max-sm: ">
       <div className="  flex justify-center h-[200px] items-center  ">
        <First/>
       </div>
       <div className="mt-[-100px] flex justify-center -z-10">
        <Line/>
       </div>
       <div className=" w-full mt-16 h-[50%]">
          <h1 className='text-white font-extrabold text-[100px] flex justify-center pt-9'>Join the Community!</h1>
          <div className='text-white  text-[30px] flex justify-center mt-24  h-[100px] mx-[36%] font-semibold  '>Subscribe to The Forager to receive monthly plant tips,
          store updates, promotions & more</div>
       </div>
       <div className="bg-white  h-[30%] mx-16 rounded-3xl  ">

        <div className="flex items-center justify-center h-[70%]">
  <button
    className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl px-10 py-5 text-center mr-2 mb-2"
    type="button"
  >
    Facebook
  </button>
  <button
    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-3xl px-10 py-5 text-center mr-2 mb-2"
    type="button"
  >
    YouTube
  </button>
  <button
    className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-3xl px-10 py-5 text-center mr-2 mb-2"
    type="button"
  >
    Twitter
  </button>
  <button
    className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-3xl px-10 py-5 text-center mr-2 mb-2"
    type="button"
  >
    Instagram
  </button>
</div>
<div className="  flex justify-center  mt-[-20px] ">
        <Line />
       </div>
        <div className=" flex justify-center text-[30px] mt-8 ">
        ©2023, All Right Reserved.
        </div>
        </div>


    </div>
       </>
    
  )
}

export default Contect
