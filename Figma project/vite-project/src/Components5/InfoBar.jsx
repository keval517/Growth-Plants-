import React from 'react'
import ArroBlack from '../Icons/ArroBlack'

function InfoBar(props) {
  return (
      <div className="flex justify-center  ">
        <div className="relative w-[80vw]  rounded-3xl border-[2px]  m-[15px] bg-slate-400">
        <input type="checkbox" id={props.id} className='absolute  peer opacity-0 ' />
        <label htmlFor={props.id} className='font-bold tracking-[1px] text-[70px] mx-[20px] h-[130px] flex items-center'>{props.h1}</label>
         <div className="absolute top-[35px] right-[30px] rotate-[-60deg] peer-active:rotated-[60deg] duration-200">
            < ArroBlack/>
         </div>
          <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
          <p className='p-[20px] text-[30px]'>{props.p}</p>
      </div>
        </div>
          </div>

  )
}

export default InfoBar
