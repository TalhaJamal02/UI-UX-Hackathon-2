import React from 'react'
import FeaturedPostCard from './FeaturedPostCard'

function FeaturedPosts() {
  return (
    <div className=' m-4 xl:m-8'>
      <div className="text-center mb-10 space-y-[10px] w-[90%] sm:w-[463px] mx-auto">
        <p className="text-[#23A6F0] text-sm sm:text-base">Practice Advice</p>
        <h1 className="text-xl sm:text-2xl font-bold text-[#252B42]">Featured Posts</h1>
        <p className="text-[#737373] text-sm sm:text-base">
          Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        <FeaturedPostCard imgSrc="/Images/fp1.png" />
        <FeaturedPostCard imgSrc="/Images/fp2.png" />
        <FeaturedPostCard imgSrc="/Images/fp3.png" />
      </div>
    </div>
  )
}

export default FeaturedPosts