import React from 'react'
import RightBlack from '../Icons/RightBlack'


function Plantproduct(props) {
  return (
    <div className='flex justify-center w-full'>
            <div className="bg-white w-[350px] h-[300px]">
                <div className="border-[3px] border-white">
                   
                    <img className='rounded-3xl   w-full h-[200px] ' src={props.img}/>
                </div>
                <div className="flex">
                <div className=" flex flex-col w-[250px] ">
                    <h1 className='text-[25px] font-bold ml-3 mt-1'>{props.title}</h1>
                    <p className='text-[15px] text-gray-400  ml-3'>Moist but well-drained</p>
                    <p className='mt-[10px] font-black text-[12px] ml-3 bold'>₹122,056</p>
                    </div>
                    <div className="pt-[40px] ml-12  ">
                    <RightBlack/>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Plantproduct
