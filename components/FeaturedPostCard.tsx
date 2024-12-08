import { AlarmClockIcon, ChartArea, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Card = {
  imgSrc: string
}

function FeaturedPostCard({ imgSrc }: Card) {
  return (
    <div >
      <Image
        src={imgSrc}
        alt=''
        width={348}
        height={300}
      />
      <div className=' w-[328px] flex flex-col gap-4'>
        <p className=' text-sm pt-4 text-[#737373]'><span className='text-[#8EC2F2]'>Google </span> Trending New</p>
        <h1 className='text-[20px] text-[#252B42]'>Loudest à la Madison #1
          (L'integral)</h1>
        <p className=' text-[#737373]'>We focus on ergonomics and meeting
          you where you work. It's only a
          keystroke away.</p>
        <div className=' flex flex-row items-center gap-3  '>
          <AlarmClockIcon className=' h-4 w-4 text-[#23A6F0]' />
          <p className=' text-[#737373]'>22 April 2021</p>
          <ChartArea className=' h-4 w-4 text-[#23856D]' />
          <p className=' text-[#737373]'>10 comments</p>
        </div>
        <p className=' text-[#737373] font-bold flex'>Learn More
          <ChevronRight className=' h-6 w-6 text-[#23A6F0]' />
        </p>
      </div>
    </div>
  )
}

export default FeaturedPostCard