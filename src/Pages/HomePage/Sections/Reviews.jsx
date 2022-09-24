import { Rating } from '@mui/material'
import React from 'react'
import { memo } from 'react'

let reviews=[
    {
        title:"My feet have stopped complaining",
        author:"Pranav Gadgil",
        designation:"Founder,Baeyork"
    },
    {
        title:"Feels like wearing a T-shirt on my feet",
        author:"Ajinkya Malasane",
        designation:"Co-founder,Playment"
    },
    {
        title:"They feel comfortable all day long",
        author:"Bharat Jain",
        designation:"Teacher,Sara Pre-school"
    }
]

const Reviews = () => {
  return (
    <div className='w-full py-24 md:px-28 bg-[#f9f9f9]'>
       <h2 className='text-3xl font-semibold text-center p-4'>CUSTOMER REVIEWS</h2>
       <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide">
            {
                reviews.map(review=>(
                    <div className="inline-block p-4 my-2 mx-4 text-center" key={review.title}>
                        <Rating value={5} readOnly style={{color:"#d3b38b"}}/>
                        <h2 className='text-xl font-semibold '>{review.title}</h2>
                        <p>-{review.author}</p>
                        <p>{review.designation}</p>
                    </div>
                ))
            }
       </div>
    </div>
  )
}

export default memo(Reviews)
