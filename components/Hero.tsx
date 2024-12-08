import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div className="w-full h-auto pb-16">
      <div className="relative">
        <Image
          src={"/Images/hero1.png"}
          alt=""
          width={1440}
          height={716}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-[25%] left-[10%] text-white">
          <div className="flex flex-col justify-evenly items-start gap-4 md:gap-6">
            <p className="text-xs md:text-sm tracking-wide">SUMMER 2020</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              NEW COLLECTION
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm">
              We know how large objects will act,<br />
              but things on a small scale.
            </p>
            <button className="px-6 py-3 md:px-10 md:py-4 text-sm md:text-lg bg-[#2DC071] text-white rounded-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection