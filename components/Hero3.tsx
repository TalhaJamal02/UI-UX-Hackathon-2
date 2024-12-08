import Image from 'next/image'
import React from 'react'

function HeroThree() {
  return (
    <div className="mx-4 xl:mx-12 flex flex-col md:flex-row items-center md:items-start">
      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-start">
        <Image
          src={"/Images/hero3.png"}
          alt=""
          width={704}
          height={682}
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 lg:my-auto  flex flex-col items-start justify-center gap-[30px]">
        <p className="text-[#BDBDBD] text-base">SUMMER 2020</p>
        <h1 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
          Part of the Neural Universe
        </h1>
        <p className="text-[20px] text-[#737373] leading-[30px]">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-row gap-3">
          <button className="rounded-[5px] py-[15px] px-[40px] bg-[#2DC071] text-white">BUY NOW</button>
          <button className="rounded-[5px] py-[15px] px-[40px] bg-white border border-[#2DC071] text-[#2DC071]">READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default HeroThree