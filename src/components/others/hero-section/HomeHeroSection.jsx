import React from 'react'
import HeroImage from '../../../assets/images/hero-image.jpg'

function HomeHeroSection() {
  return (
    <div className='w-11/12 lg:w-4/6  mx-auto py-14 flex flex-wrap-reverse my-3'>
        <div className='lg:w-6/12 sm:w-full mx-2 lg:text-left md:text-center my-auto'>
            <h1 className='lg:text-4xl sm:text-sxl font-black lg:mb-7 sm:mb-8'>
                Buy and Sell your Artistic NFTS items at Ease
            </h1>
            <p className='text-sm text-gray-500 font-medium'>
                Browse of array of the best NFTS artworks as made by the best <br/>and most reliable artists around the globe.
            </p>

            <div className='mt-14'>
                <span className='rounded-3xl border border-blue-600 px-8 py-2 text-xs 
                cursor-pointer text-blue-600 mx-3 '>Sign In</span>
                <span className='rounded-3xl border bg-blue-600 px-8 py-2 text-xs text-white'>Register</span>
            </div>
        </div>
        <div className='lg:w-5/12 sm:w-10/12  md:mx-auto'>
            <img className='h-5/12 rounded-lg sm:mx-3' src={HeroImage}/>
        </div>
    </div>
  )
}

export default HomeHeroSection