import React from 'react'
import Navbar from '../Components/Navbar'
import '../index.css'
import Growth from '../Components/Growth'
import Download from '../Icons/Download'

function Home() {
  return (
        <div className="border-solid border-[7px] border-white rounded-[30px] bg-cover h-screen bg-center bg-no-repeat max-sm:bg-cover max-sm:bg-center bg-[url('Home.png')]  ">
            <Navbar/>
        <p className='text-white font-medium text-[48px] ml-[300px] mt-[150px] max-sm:text-[20px] max-sm:ml-16 max-sm:mt-1 '>plantique</p>
            <Growth/>
            <p className='text-white text-wrap w-[43%] mt-[300px] text-3xl z-1 font-semibold ml-[30%]'>We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our greenhouse to yours!</p>
            <div className="flex  ">
              <div className="bg-[#979797]/30 border-[1px] w-[300px] mt-10 h-[250px] ml-6 rounded-[20px] ">
              <h1 className='text-white flex justify-center text-[40px]'>100+ plants</h1>
              <p className='text-white text-[25px] ml-3 mt-5 '>We want our visitors to be inspire to get their hands dirty</p>
              </div>
              <div className="bg-[#979797]/15 border-[1px] w-[130px] h-[250px] mt-10 rounded-[20px]">
              <div className="flex flex-col  items-center mt-4 hover:mt-0 ">
                  <div className="w-[80px] h-[80px] rounded-full bg-cover bg-center hover:w-28  hover:h-28 hover:z-20  mt-3 bg-[url('1.png')]"></div>
                  <div className="w-[80px] h-[80px] rounded-full bg-cover bg-center hover:w-28 hover:h-28 z-10 mt-[-20px] bg-[url('2.png')]"></div>
                  <div className="w-[80px] h-[80px] rounded-full bg-cover bg-center hover:w-28 hover:h-28 hover:z-10 mt-[-20px] bg-[url('3.png')]"></div>
              </div>
              </div>
              <div className=" w-[180vh] flex justify-end mt-[100px] h-0">

            <Download/>
              </div>
            </div>
        </div>
  )
}

export default Home
