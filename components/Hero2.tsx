import Image from 'next/image'
import React from 'react'

function HeroTwo() {
  return (
    <div className=' bg-[#23856D]'>
      <div className="flex flex-col md:flex-row items-center md:items-start relative">
        {/* Text Section */}
        <div className="flex-1  my-auto text-white px-4 md:px-8 lg:px-12">
          <div className="flex flex-col justify-center gap-4 lg:gap-8">
            <p className="text-[20px] mt-6 sm:mt-0">SUMMER 2020</p>
            <h1 className=" text-3xl lg:text-[58px] leading-3 lg:leading-[80px] font-bold ">
              Vita Classic
              Product
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm">
              We know how large objects will act,<br />
              but things on a small scale.
            </p>
            <div className=' w-[295px] flex flex-row items-center justify-start gap-4'>
              <p className=' text-2xl font-bold'>$16.48</p>
              <button className="px-6 py-3 md:px-10 md:py-4 text-sm md:text-lg bg-[#2DC071] text-white rounded-md ">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={"/Images/hero2.png"}
            alt=""
            width={443}
            height={685}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroTwo