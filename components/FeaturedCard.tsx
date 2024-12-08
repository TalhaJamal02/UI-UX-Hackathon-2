import Image from 'next/image'
import React from 'react'

type Card = {
  imgSrc: string
}

function FeaturedCard({ imgSrc }: Card) {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded overflow-hidden">
      <div className='flex flex-col items-center justify-center'>
        <Image
          src={imgSrc}
          alt="Graphic Design"
          width={239}
          height={427}
          className=" object-contain"
        />
        <div className="p-4 text-center space-y-[10px]">
          <h2 className="text-lg font-bold">Graphic Design</h2>
          <p className="text-sm text-gray-500 font-semibold">English Department</p>
          <div className="mt-2">
            <span className="line-through text-gray-400 px-2">$16.48</span>
            <span className="text-green-600 font-semibold">$6.48</span>
          </div>
          <div className="flex justify-center mt-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full mx-1"></div>
            <div className="w-4 h-4 bg-green-600 rounded-full mx-1"></div>
            <div className="w-4 h-4 bg-orange-600 rounded-full mx-1"></div>
            <div className="w-4 h-4 bg-black rounded-full mx-1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard