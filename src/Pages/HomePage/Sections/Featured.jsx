import React from 'react'
import { memo } from 'react'
import Video from "../../../Assests/videos/Adjustment_Layer.mp4"
import FeatImage1 from "../../../Assests/FeaturedImages/mintlogo.png";
import FeatImage2 from "../../../Assests/FeaturedImages/yourstorylogo.webp";
import FeatImage3 from "../../../Assests/FeaturedImages/lbblogo.webp";
import FeatImage4 from "../../../Assests/FeaturedImages/cnbclogo.webp";
import FeatImage5 from "../../../Assests/FeaturedImages/theindianexlogo.webp";

let featuredImages=[FeatImage1,FeatImage2,FeatImage3,FeatImage4,FeatImage5]
const Featured = () => {
  return (
    <div className='md:flex gap-4 m-4'>
        <div className="flex-1 flex justify-center items-center ">
            <video src={Video} muted autoPlay controls type="video/mp4" className='h-full'></video>
        </div>
        <div className="flex-1 bg-[#f5f7f7]">
            <h2 className='text-3xl font-semibold text-center lg:py-16 sm:p-4'>FEATURED ON</h2>
            <div className="flex flex-wrap justify-center items-center gap-2">
                {
                    featuredImages.map(img=>
                        <div key={img}>
                            <img src={img} alt={img} className="w-36 h-36 md:h-32 md:w-32 lg:h-40 lg:w-40"/>
                        </div>
                        )
                }
            </div>
        </div>
    </div>
  )
}

export default memo(Featured)
