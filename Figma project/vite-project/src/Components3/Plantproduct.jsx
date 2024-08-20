import React from 'react'
import RightBlack from '../Icons/RightBlack'


function Plantproduct(props) {
  return (
    <div className='flex justify-center w-full'>
            <div className="bg-white w-[700px] h-[600px]">
                <div className="border-[3px] border-white">
                   
                    <img className='rounded-3xl   w-full h-[400px] ' src={props.img}/>
                </div>
                <div className="flex">
                <div className=" flex flex-col w-[500px] ">
                    <h1 className='text-[50px] font-bold ml-5 mt-2'>{props.title}</h1>
                    <p className='text-[30px] text-gray-400  ml-5'>Moist but well-drained</p>
                    <p className='mt-[20px] font-black text-[25px] ml-5 bold'>₹122,056</p>
                    </div>
                    <div className="pt-[80px] ml-24  ">
                    <RightBlack/>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Plantproduct
