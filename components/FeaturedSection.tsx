
import React from 'react'
import FeaturedCard from './FeaturedCard'

function FeaturedSection() {
  return (
    <div>
      <div className=' text-center mb-10 space-y-[10px]'>
        <p className=' text-[#737373] text-[20px]'>Featured Products</p>
        <h1 className=' text-2xl font-bold text-[#252B42] '>BESTSELLER PRODUCTS</h1>
        <p className=' text-[#737373]'>Problems trying to resolve the conflict between </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 xl:p-8">
        <FeaturedCard imgSrc="/Images/f1.png" />
        <FeaturedCard imgSrc="/Images/f2.png" />
        <FeaturedCard imgSrc="/Images/f3.png" />
        <FeaturedCard imgSrc="/Images/f4.png" />
        <FeaturedCard imgSrc="/Images/f5.png" />
        <FeaturedCard imgSrc="/Images/f6.png" />
        <FeaturedCard imgSrc="/Images/f7.png" />
        <FeaturedCard imgSrc="/Images/f8.png" />
      </div>
    </div>
  )
}

export default FeaturedSection
