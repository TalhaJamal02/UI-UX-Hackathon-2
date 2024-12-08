import { MailIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
  return (
    <div>
      <div className='h-12 w-full bg-[#252B42] text-white hidden lg:flex flex-row justify-between items-center gap-3 pl-12'>
        <div className=' flex flex-row items-center gap-2'>
          <PhoneIcon className=' h-[16px] w-[16px] ' />
          <p className=' font-bold mr-4'>(225) 555-0118</p>
          <MailIcon className=' h-[16px] w-[16px]' />
          <p className=' font-bold'>michelle.rivera@example.com</p>
        </div>
        <p className=' font-bold'>Follow Us  and get a chance to win 80% off</p>
        <div className=' flex flex-row items-center gap-3 pr-12'>
          <p className=' font-bold'>Follow Us:</p>
          <Image
            src={"/Images/instagram.svg"}
            alt='instagram'
            width={16}
            height={16}
            className=' object-contain'
          />
          <Image
            src={"/Images/youtube.svg"}
            alt='youtube'
            width={16}
            height={16}
            className=' object-contain'
          />
          <Image
            src={"/Images/facebook.svg"}
            alt='facebook'
            width={16}
            height={16}
            className=' object-contain'
          />
          <Image
            src={"/Images/twitter.svg"}
            alt='twitter'
            width={16}
            height={16}
            className=' object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default TopHeader