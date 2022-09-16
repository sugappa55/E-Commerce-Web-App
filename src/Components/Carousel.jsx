import React from 'react'
import { useSelector } from 'react-redux'
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
import { useNavigate } from 'react-router-dom'


const Carousel = () => {
    const navigate=useNavigate()
    const data=useSelector(store=>store.products)
    console.log(data)
    const slideLeft=()=>{
        let elem=document.getElementById("slider")
        elem.scrollLeft=elem.scrollLeft-400
    }
    const slideRight=()=>{
        let elem=document.getElementById("slider")
        elem.scrollLeft=elem.scrollLeft+400
    }
  return (
    <div className='p-4 md:p-12' >
        <div className='text-center p-16'>
            <p className='text-3xl uppercase font-bold tracking-tight'>BestSelllers</p>
            <p>Choose your style</p>
        </div>
        <div className='relative flex items-center '>
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white left-0 rounded-full opacity-50 hover:opacity-100  cursor-pointer z-10"/>
        <div id="slider" className="w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide">
                {
                    data?.slice(0,5).map(e=>(
                       <div key={e.id} className=' w-[75vw] h-90 md:w-[35vw] lg:w-[22vw] md:h-64 inline-block cursor-pointer' onClick={()=>navigate(`/single/${e.id}`)}>

                        <img src={e.images[0]} alt="" className='w-full h-[70%]' />
                        <div className=' p-6 md:p-4 text-center'>
                            <p className='text-sm'>{e.name}{" | "}{e.color}{" | "}{e.gender}</p>
                            <p className='text-red-500'>Rs.{e.final_price}</p>
                        </div>
                       </div>
                    ))
                }
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10"/>
        </div>
      
    </div>
  )
}

export default Carousel
