import React from 'react'
import Right from '../Icons/Right'
import RightWhite from '../Icons/RightWhite'

function Collection() {
  return (
    <div className="bg-white w-[800px] h-[400px] ">
       <div className="flex gap-3 mt-3">

        <div className="border-[3px] border-white">
           
            <div className="rounded-2xl   w-[800px] h-[400px] bg-cover bg-[url('4(1st).png')]">
        <div className="flex justify-end pt-4 pr-3">
        <Right/>
        </div>
        <div className="flex items-end w-[800px]  h-[300px] justify-center">
        <div className="bg-[#FFFFFF]/15 w-[800px] mx-4 h-fit border-[1px] rounded-3xl text-white">
            <h1 className='text-[60px] font-semibold'>Philodendron</h1>
            <p className='text-[25px] pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
        </div>
        </div>
            </div>
        </div>
        
            <div className="border-[3px] border-white">
           
            <div className="rounded-2xl   w-[600px] h-[400px] bg-cover bg-center bg-[url('4(2nd).png')]">
        <div className="flex justify-end pt-4 pr-3">
        <RightWhite/>
        </div>
        <div className="flex items-center w-[800px]   h-[400px] justify-start">
            <h1 className='text-[90px] ml-10 font-bold text-white'>Calathea</h1>
        </div>
            </div>
        </div>
       </div>


        {/* 2ndline */}

        <div className="flex gap-3 mt-3">
            
        
        <div className="border-[3px] border-white">
           
           <div className="rounded-2xl   w-[600px] h-[400px] bg-cover bg-center bg-[url('4(3rd).png')]">
       <div className="flex justify-end pt-4 pr-3">
       <RightWhite/>
       </div>
       <div className="flex items-center w-[800px]   h-[400px] justify-start">
           <h1 className='text-[80px] ml-6 font-bold text-white'>Air Purifying</h1>
       </div>
           </div>
       </div>

       
        
       <div className="border-[3px] border-white">
           
           <div className="rounded-2xl   w-[800px] h-[400px] bg-cover bg-center bg-[url('Home.png')]">
       <div className="flex justify-end pt-4 pr-3">
       <RightWhite/>
       </div>
       <div className="flex items-center w-[900px]   h-[400px] justify-start">
           <h1 className='text-[80px] ml-4 font-bold text-white'>Low Light Tolerant</h1>
       </div>
           </div>
       </div>
        </div>

    </div>
  )
}

export default Collection
