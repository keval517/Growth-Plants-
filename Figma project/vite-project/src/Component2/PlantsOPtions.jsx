import React from 'react'
import Right from '../Icons/Right'

function PlantsOPtions() {
  return (
    <div className='flex h-full gap-2  justify-center  items-center '>
        <div className="w-[550px]  h-[400px] rounded-3xl bg-[url('Home.png')] bg-center bg-cover ">
            <div className="ml-7 flex mt-4  text-white ">
            <h1 className='text-[50px] font-semibold '>pet friendly plants  </h1>
                <div className=" flex items-center w-[95px] mt-2 justify-end ">
                <Right/> 
                </div>
                </div>
                <div className=" mt-8  flex justify-center">

            <p className='text-white text-[15px] w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                </div>
                <p className='border-[1px] w-[90%] mt-[10%] ml-7'> </p>
                <div className="w-full h-[90px] flex items-center  ml-4">
                <div className=" rounded-full  border-[1px] w-[150px] bg-slate-200/30 h-[42px] "> 
                <p className='flex justify-center text-[15px] ml-4  text-white mt-[7px]'>Piperaceae</p>
              <img className=' w-10 h-10 border-[1px] mt-[-29px] p-2  rounded-full text-[30%] animate-spin ' src="plant.png"/>
                </div>
                </div>

        </div>
        <div className="w-[300px]  h-[400px] rounded-3xl bg-cover bg-center grayscale hover:grayscale-0 bg-[url('https://s3-alpha-sig.figma.com/img/54a6/d86c/fe64a607c55e23c1e139ccb4b34e4bc3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RQ530vPeKcU3hswLjmTd7cx7NP4gsBape3EbYm17bXLYBEYNz-eNx6YFv97WfzBu~KxQgg8k2TY4uffa~0AjBPaGQitJs-fg3oT7FtuIhs52av3ZdydYJp17P5p9ZmfAltXqJJNnh4ZvD-NglkPvofZj2xsuliJ0WwSVPUaihQ4OCXn5DpH-9R0AYl0hcxI29LSdcKO24hQ9gih3BnLlSUBYXRqimdVv65AEViw1HNTeuB0eD4oTMiGx4m5zzw9MpzDXP1E6S4DYC7cui5IcatJAyNSN-tUYL4OnBLO5pwMwUsNtd02V4ymz~oX0jTe1yVooVgGGQF7ke3jLcDwoZA__')] ">
        <div className="ml-4 flex mt-4  text-white ">
        <h1 className='text-[50px] font-semibold '> Orchids </h1>
        </div>
        <div className=" mt-7 flex justify-center">
        <p className='text-white text-[15px] w-[85%]'>Orchids are easily everyones Favorite flowering plant, Find new orchids and orchids success items in this collection</p>
        </div>
        <p className='border-[1px] w-[90%] mt-[19%] ml-3'> </p>
                <div className="w-full h-[90px] flex items-center  ml-4">
                <div className=" rounded-full  border-[1px] w-[150px] bg-slate-200/30 h-[42px] "> 
                <p className='flex justify-center text-[15px] ml-4  text-white mt-[7px]'>Piperaceae</p>
              <img className=' w-10 h-10 border-[1px] mt-[-29px] p-1  rounded-full text-[30%] animate-spin  ' src="plant.png"/>
                </div>
                </div>
        </div>
        
        <div className="w-[300px]  h-[400px] rounded-3xl bg-cover bg-center grayscale hover:grayscale-0 bg-[url('https://s3-alpha-sig.figma.com/img/5c92/d524/5ee8d6715a46768880d2ec656d92ce78?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJDEdaV4FLHIRCFlDbxB5LOH0fYjE4N2ftGL3TGejYzCKw1bvpAJz~0z7gBbMYzzLgJbRnyZo9DR5CsSLR-Pkj-xFBzZ8Ykh~4XKKgkIUPi4FpZv13ZcBIqFE1PiJOaiBgQBfn0bYBtw2adq3gLx896Vb36kPAoJrLcyJ4nCFfovp1BlvmHhO4bZZmIUu6XfPbsac65eNI7uC1FfvsUj0Vh2kSjDcfIfWARuqamhsGHgDtdhL2sCUmcFQJQyivIA8mZDbov8FJCuGftfqCcj0KRmOorxoO83S9jOFdbMvRxMXdHti4rsd4M~FZQpYbsMYM5MfC-6lIa-FZQEvLhgCA__')] ">
        <div className="ml-4 flex mt-4  text-white ">
        <h1 className='text-[50px] font-semibold '> Succulents </h1>
        </div>
        <div className=" mt-7 flex justify-center">
        <p className='text-white w-[85%] text-[15px]'>All Succulents are cacti, but not all cacti are succulents. Both make low maintence house pants.</p>
        </div>
        <p className='border-[1px] w-[90%] mt-[19%] ml-3'> </p>
                <div className="w-full h-[90px] flex items-center  ml-4">
                <div className=" rounded-full  border-[1px] w-[150px] bg-slate-200/30 h-[42px] "> 
                <p className='flex justify-center text-[15px] ml-4  text-white mt-[7px]'>Piperaceae</p>
              <img className=' w-10 h-10 border-[1px] mt-[-29px] p-1  rounded-full text-[30%]  animate-spin' src="plant.png"/>
                </div>
                </div>
        </div>
    </div>
  )
}

export default PlantsOPtions
