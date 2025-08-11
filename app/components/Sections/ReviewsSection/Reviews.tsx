import React from 'react'
import SectionHeadingText from '../../SectionHeadingText/SectionHeadingText'

import './Reviews.css'

import ReviewsThumbSlider from '../../ReviewsThumbSlider/ReviewsThumbSlider'

const Reviews = () => {
  return (
    <div className='mt-[180px]'>
        <SectionHeadingText SectionTitle='WORDS' buttonTitle='REVIEWS' />
        <div className='mt-[28px]'>
            <h3 className='font-light tracking-wide text-[#F3EDDE] my-[32px]'>Hear from visionaries and experts</h3>
            <div className='bg-[#F3EDDE] w-[80%] mx-auto reviews-box relative'>
                <ReviewsThumbSlider />
            </div>
        </div>
    </div>
  )
}

export default Reviews