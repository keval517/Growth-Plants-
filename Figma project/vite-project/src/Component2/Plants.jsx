import React from 'react'
import Main from '../Component2/Main'
import PlantsOPtions from './PlantsOPtions'

function Plants() {
  return (
    <div id='shop' className='border-solid border-[7px] border-white rounded-[30px] w-screen h-screen'>
        <Main/>
        <PlantsOPtions/>
    </div>
  )
}

export default Plants
