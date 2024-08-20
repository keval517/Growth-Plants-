import React from 'react'
import Right from '../Icons/Right'

function PlantsOPtions() {
  return (
    <div className='flex h-full gap-2  justify-center  items-center '>
        <div className="w-[1100px]  h-[800px] rounded-3xl bg-[url('Home.png')] bg-center bg-cover ">
            <div className="ml-14 flex mt-8  text-white ">
            <h1 className='text-[100px] font-semibold '>pet friendly plants  </h1>
                <div className=" flex items-center w-[190px] mt-4 justify-end ">
                <Right/> 
                </div>
                </div>
                <div className=" mt-16  flex justify-center">

            <p className='text-white text-[30px] w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                </div>
                <p className='border-[1px] w-[90%] mt-[20%] ml-7'> </p>
                <div className="w-full h-[180px] flex items-center  ml-8">
                <div className=" rounded-full  border-[1px] w-[300px] bg-slate-200/30 h-[84px] "> 
                <p className='flex justify-center text-[30px] ml-8  text-white mt-[14px]'>Piperaceae</p>
              <img className=' w-20 h-20 border-[1px] mt-[-58px] p-1  rounded-full text-[60%]  ' src="plant.png"/>
                </div>
                </div>

        </div>
        <div className="w-[600px]  h-[800px] rounded-3xl bg-cover bg-center grayscale hover:grayscale-0 bg-[url('https://s3-alpha-sig.figma.com/img/54a6/d86c/fe64a607c55e23c1e139ccb4b34e4bc3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RQ530vPeKcU3hswLjmTd7cx7NP4gsBape3EbYm17bXLYBEYNz-eNx6YFv97WfzBu~KxQgg8k2TY4uffa~0AjBPaGQitJs-fg3oT7FtuIhs52av3ZdydYJp17P5p9ZmfAltXqJJNnh4ZvD-NglkPvofZj2xsuliJ0WwSVPUaihQ4OCXn5DpH-9R0AYl0hcxI29LSdcKO24hQ9gih3BnLlSUBYXRqimdVv65AEViw1HNTeuB0eD4oTMiGx4m5zzw9MpzDXP1E6S4DYC7cui5IcatJAyNSN-tUYL4OnBLO5pwMwUsNtd02V4ymz~oX0jTe1yVooVgGGQF7ke3jLcDwoZA__')] ">
        <div className="ml-8 flex mt-8  text-white ">
        <h1 className='text-[100px] font-semibold '> Orchids </h1>
        </div>
        <div className=" mt-14 flex justify-center">
        <p className='text-white text-[30px] w-[85%]'>Orchids are easily everyones Favorite flowering plant, Find new orchids and orchids success items in this collection</p>
        </div>
        <p className='border-[1px] w-[90%] mt-[38%] ml-7'> </p>
                <div className="w-full h-[180px] flex items-center  ml-8">
                <div className=" rounded-full  border-[1px] w-[300px] bg-slate-200/30 h-[84px] "> 
                <p className='flex justify-center text-[30px] ml-8  text-white mt-[14px]'>Piperaceae</p>
              <img className=' w-20 h-20 border-[1px] mt-[-58px] p-1  rounded-full text-[60%]  ' src="plant.png"/>
                </div>
                </div>
        </div>
        
        <div className="w-[600px]  h-[800px] rounded-3xl bg-cover bg-center grayscale hover:grayscale-0 bg-[url('https://s3-alpha-sig.figma.com/img/5c92/d524/5ee8d6715a46768880d2ec656d92ce78?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJDEdaV4FLHIRCFlDbxB5LOH0fYjE4N2ftGL3TGejYzCKw1bvpAJz~0z7gBbMYzzLgJbRnyZo9DR5CsSLR-Pkj-xFBzZ8Ykh~4XKKgkIUPi4FpZv13ZcBIqFE1PiJOaiBgQBfn0bYBtw2adq3gLx896Vb36kPAoJrLcyJ4nCFfovp1BlvmHhO4bZZmIUu6XfPbsac65eNI7uC1FfvsUj0Vh2kSjDcfIfWARuqamhsGHgDtdhL2sCUmcFQJQyivIA8mZDbov8FJCuGftfqCcj0KRmOorxoO83S9jOFdbMvRxMXdHti4rsd4M~FZQpYbsMYM5MfC-6lIa-FZQEvLhgCA__')] ">
        <div className="ml-8 flex mt-8  text-white ">
        <h1 className='text-[100px] font-semibold '> Succulents </h1>
        </div>
        <div className=" mt-14 flex justify-center">
        <p className='text-white w-[85%] text-[30px]'>All Succulents are cacti, but not all cacti are succulents. Both make low maintence house pants.</p>
        </div>
        <p className='border-[1px] w-[90%] mt-[38%] ml-7'> </p>
                <div className="w-full h-[180px] flex items-center  ml-8">
                <div className=" rounded-full  border-[1px] w-[300px] bg-slate-200/30 h-[84px] "> 
                <p className='flex justify-center text-[30px] ml-8  text-white mt-[14px]'>Piperaceae</p>
              <img className=' w-20 h-20 border-[1px] mt-[-58px] p-1  rounded-full text-[60%]  ' src="plant.png"/>
                </div>
                </div>
        </div>
    </div>
  )
}

export default PlantsOPtions
