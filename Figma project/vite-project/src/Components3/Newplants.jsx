import React from 'react'
import Plantproduct from './Plantproduct'

function Newplants() {
  return (
    <div id='1' className='border-solid border-[7px] border-white rounded-[30px]  w-full h-screen  bg-slate-200'>
        <div className=" w-[100%] flex justify-center h-[40%]">

        <header className='font-extrabold text-nowrap text-[100px] flex justify-start mt-[27px]  '>New Plants</header>
        <p className='text-[15px] font-semibold w-[40%] ml-[9%] flex items-center  justify-center   '>Bring nature insider and shop our big selections of fresh indoor plants including Instagram-worthy houseplants, pet-friendly plants, orchids and one-of-a-kind rare plants.</p>
        </div>
        <div className="flex">
        
        <Plantproduct  title="Peperomia Plants" img='3rd.png' />
        <Plantproduct title="Fiddle-Leaf Fig" img='3(2nd).png'/>
        <Plantproduct title="Calathea Orbifolia" img='3(3rd).png'/>
        </div>
    </div>
  )
}

export default Newplants
