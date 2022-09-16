import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import {useNavigate} from "react-router-dom"

import Image1 from "../Assests/SlideShowImages/Banana_banner1.webp"
import Image2 from "../Assests/SlideShowImages/FH_Banner3jpg_41cafa8d-1e9b-4545-9cd6-fa20b38961b0.webp"
import Image3 from "../Assests/SlideShowImages/KoolTex_banner2.webp"
import Image4 from "../Assests/SlideShowImages/Linen_banner2.webp"
import Image5 from "../Assests/SlideShowImages/Softknit_banner1.webp"

const Images= [
  {
   src:Image2,
   color:"#a89587",
   heading:"India's most innovative sneaker brand",
   sub_heading:"Making shoes for new generation"
  },
  {
   src:Image4,
   color:"#ffefd6",
   heading:"India's First",
   sub_heading:"Linen Sneakers"
  },
   {
    src:Image1,
    color:"#f8dab6",
    heading:"Worlds's First",
    sub_heading:"Banana Fibre Sneakers"
   },
   {
    src:Image3,
    color:"#d4f9ff",
    heading:"All-weather",
    sub_heading:"SoftKnit Loafers"
   },
   {
    src:Image5,
    color:"#ffedef",
    heading:"The First",
    sub_heading:"Dry Fit Trainers"
   }
]

/* A function that returns a slideshow component. */

const SlideShow = () => {
  const nav=useNavigate()
  return (
    <div className='w-[100%] h-[500px] text-center text-black' name="slideshow">
   
    <Slide autoplay={true} indicators={false} transitionDuration={300} canSwipe={false} >
     {Images.map((slideImage, index)=> (
        <div className="each-slide " key={index} >
          <div className="flex gap-1 flex-col md:flex-row xs:flex">
                    <div className='flex-1'>
                        <img src={slideImage.src} alt="images" width="100%" height="100%"/>
                    </div>
                    <div className='flex-1 flex justify-center items-center' style={{backgroundColor:slideImage.color}}>
                        <div>
                               { index?
                               (
                                <div className='p-2'>
                                  <p className='font-bold text-lg'>{slideImage.heading}</p>
                                <p className='font-bold text-2xl md:text-4xl'>{slideImage.sub_heading}</p>
                                    <button className='btn' onClick={()=>nav("/collections/all")}>Learn More</button>
                                </div>
                               ):
                                (
                                  <div className=' p-2 md:p-8 text-white'>
                                <p className='font-bold text-2xl md:text-4xl'>{slideImage.heading}</p>
                                    <p className='font-bold text-xl'>{slideImage.sub_heading}</p>
                                    <button className='btn' onClick={()=>nav("/collections/all")}>Learn More</button>
                                  </div>
                                )}
                        </div>
                    </div>
             </div>
        </div>
      ))} 
    </Slide>
</div>  )
}

export default SlideShow
