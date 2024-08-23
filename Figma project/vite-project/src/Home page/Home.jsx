import React from 'react'
import Navbar from '../Components/Navbar'
import '../index.css'
import Growth from '../Components/Growth'
import Download from '../Icons/Download'

function Home() {
  return (
        <div className="border-solid border-[5px] border-white rounded-[30px] bg-cover h-screen bg-center bg-no-repeat max-sm:bg-cover max-sm:bg-center bg-[url('Home.png')]  ">
            <Navbar/>
        <p className='text-white font-medium text-[40px] ml-[170px] mt-[0px] max-sm:text-[20px] max-sm:ml-16 max-sm:mt-1 '>plantique</p>
            <Growth/>
            <p className='text-white text-wrap w-[45%] mt-[-40px] z-1 font-bold ml-[30%]'>We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our greenhouse to yours!</p>
            <div className="flex  ">
              <div className="bg-[#979797]/30 border-[1px] w-[150px] mt-5 h-[125px] ml-3 rounded-[20px] ">
              <h1 className='text-white flex justify-center text-[25px]'>100+ plants</h1>
              <p className='text-white text-[14px] ml-3 mt-3 '>We want our visitors to be inspire to get their hands dirty</p>
              </div>
              <div className="bg-[#979797]/15 border-[1px] w-[65px] h-[125px] mt-5 rounded-[20px]">
              <div className="flex flex-col  items-center mt-2 hover:mt-1 ">
                  <div className="w-[50px] h-[50px] rounded-full bg-cover bg-center hover:w-14  hover:h-14 hover:z-20   bg-[url('1.png')]"></div>
                  <div className="w-[50px] h-[50px] rounded-full bg-cover bg-center hover:w-14 hover:h-14 z-10 mt-[-20px] bg-[url('2.png')]"></div>
                  <div className="w-[50px] h-[50px] rounded-full bg-cover bg-center hover:w-14 hover:h-14 hover:z-10 mt-[-20px] bg-[url('3.png')]"></div>
              </div>
              </div>
              <div className="absolute right-7  flex justify-end mt-[50px] ">

            <Download/>
              </div>
            </div>
        </div>
  )
}

export default Home
