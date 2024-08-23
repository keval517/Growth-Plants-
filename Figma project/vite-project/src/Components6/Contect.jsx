import React from 'react'
import First from './First'
import Line from './Line'

function Contect() {
  return (
    <>
    
    <div id='Contact' className="border-solid border-[7px] border-white rounded-[30px] bg-cover h-screen bg-center  bg-no-repeat bg-[url('last.png')] max-sm: ">
       <div className="  flex justify-center h-[100px] items-center  ">
        <First/>
       </div>
       <div className="mt-[-50px] flex justify-center -z-10">
        <Line/>
       </div>
       <div className=" w-full mt-8 h-[50%]">
          <h1 className='text-white font-extrabold text-[50px] flex justify-center pt-5'>Join the Community!</h1>
          <div className='text-white  text-[15px] flex justify-center mt-12  h-[50px] mx-[36%] font-semibold  '>Subscribe to The Forager to receive monthly plant tips,
          store updates, promotions & more</div>
       </div>
       <div className="bg-white  h-[30%] mx-8 rounded-3xl  ">

        <div className="flex items-center justify-center h-[70%]">
  <button
    className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-3 text-center mr-1 mb-1"
    type="button"
  >
    Facebook
  </button>
  <button
    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-xl px-5 py-3 text-center mr-1 mb-1"
    type="button"
  >
    YouTube
  </button>
  <button
    className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-3 text-center mr-1 mb-1"
    type="button"
  >
    Twitter
  </button>
  <button
    className="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-xl px-5 py-3 text-center mr-1 mb-1"
    type="button"
  >
    Instagram
  </button>
</div>
<div className="  flex justify-center  mt-[-10px] ">
        <Line />
       </div>
        <div className=" flex justify-center text-[15px] mt-4 ">
        ©2023, All Right Reserved.
        </div>
        </div>


    </div>
       </>
    
  )
}

export default Contect
