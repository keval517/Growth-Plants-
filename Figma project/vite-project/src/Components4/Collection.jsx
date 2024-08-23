import React from 'react'
import Right from '../Icons/Right'
import RightWhite from '../Icons/RightWhite'

function Collection() {
  return (
    <div className="bg-white w-[400px] h-[200px] ">
       <div className="flex gap-2 mt-2">

        <div className="border-[3px] border-white">
           
            <div className="rounded-2xl   w-[400px] h-[200px] bg-cover bg-[url('4(1st).png')]">
        <div className="flex justify-end pt-2 pr-2">
        <Right/>
        </div>
        <div className="flex items-end w-[400px]  h-[150px] justify-center">
        <div className="bg-[#FFFFFF]/15 w-[400px] mx-2 h-fit border-[1px] rounded-3xl text-white">
            <h1 className='text-[30px] font-semibold'>Philodendron</h1>
            <p className='text-[12px] pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
        </div>
        </div>
            </div>
        </div>
        
            <div className="border-[3px] border-white">
           
            <div className="rounded-2xl   w-[300px] h-[200px] bg-cover bg-center bg-[url('4(2nd).png')]">
        <div className="flex justify-end pt-2 pr-2">
        <RightWhite/>
        </div>
        <div className="flex items-center w-[400px]   h-[200px] justify-start">
            <h1 className='text-[45px] ml-5 font-bold text-white'>Calathea</h1>
        </div>
            </div>
        </div>
       </div>


        {/* 2ndline */}

        <div className="flex gap-2 mt-2">
            
        
        <div className="border-[3px] border-white">
           
           <div className="rounded-2xl   w-[300px] h-[200px] bg-cover bg-center bg-[url('4(3rd).png')]">
       <div className="flex justify-end pt-2 pr-2">
       <RightWhite/>
       </div>
       <div className="flex items-center w-[400px]   h-[200px] justify-start">
           <h1 className='text-[40px] ml-3 font-bold text-white'>Air Purifying</h1>
       </div>
           </div>
       </div>

       
        
       <div className="border-[3px] border-white">
           
           <div className="rounded-2xl   w-[400px] h-[200px] bg-cover bg-center bg-[url('Home.png')]">
       <div className="flex justify-end pt-2 pr-2">
       <RightWhite/>
       </div>
       <div className="flex items-center w-[450px]   h-[200px] justify-start">
           <h1 className='text-[40px] ml-2 font-bold text-white'>Low Light Tolerant</h1>
       </div>
           </div>
       </div>
        </div>

    </div>
  )
}

export default Collection
