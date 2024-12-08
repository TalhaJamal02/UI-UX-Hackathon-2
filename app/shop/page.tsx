import FeaturedCard from '@/components/FeaturedCard'
import { ChevronDown, ChevronRight, LayoutGrid, List } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function ShopPage() {
  return (
    <div className=' h-full w-full p-4 xl:p-8'>
      <div className=' flex flex-row justify-between items-center'>
        <h1 className=' text-2xl font-bold text-[#252B42]'>Shop</h1>
        <div className=' flex gap-2'>
          <p>Home</p><ChevronRight className=' h-6 w-6 text-[#BDBDBD]' />
          <p className=' text-[#BDBDBD]'>Shop</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {["shop1", "shop2", "shop3", "shop4", "shop5"].map((shop, index) => (
          <Image
            key={index}
            src={`/Images/${shop}.png`}
            alt={`Shop ${index + 1}`}
            width={206}
            height={223}
            className="object-contain w-full"
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between p-4 mt-8 gap-4">
        <h3 className="text-[#737373] font-bold text-center md:text-left">Showing all 12 results</h3>

        <div className="flex items-center justify-center gap-3 md:gap-5">
          <p className="text-[#737373] font-bold">View:</p>
          <LayoutGrid className="h-6 w-6 fill-black cursor-pointer" />
          <List className="h-6 w-6 text-[#737373] cursor-pointer" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex items-center gap-2 justify-center">
            <p className="text-[#737373]">Popularity</p>
            <ChevronDown className="h-6 w-6 text-[#737373]" />
          </div>
          <button className="px-4 py-2 bg-[#23A6F0] text-white rounded-md w-full md:w-auto">
            Filter
          </button>
        </div>
      </div>

      <div className=" hidden lg:flex flex-row items-center justify-evenly p-4 mt-8">
        <Image
          src={"/Images/Sicon1.svg"}
          alt='img'
          width={153}
          height={34}
        />
        <Image
          src={"/Images/Sicon2.svg"}
          alt='img'
          width={146}
          height={59}
        />
        <Image
          src={"/Images/Sicon3.svg"}
          alt='img'
          width={152}
          height={75}
        />
        <Image
          src={"/Images/Sicon4.svg"}
          alt='img'
          width={151}
          height={42}
        />
        <Image
          src={"/Images/Sicon5.svg"}
          alt='img'
          width={151}
          height={62}
        />
        <Image
          src={"/Images/Sicon6.svg"}
          alt='img'
          width={151}
          height={72}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-8">
        <FeaturedCard imgSrc="/Images/sp1.png" />
        <FeaturedCard imgSrc="/Images/sp2.png" />
        <FeaturedCard imgSrc="/Images/sp3.png" />
        <FeaturedCard imgSrc="/Images/sp4.png" />
        <FeaturedCard imgSrc="/Images/sp5.png" />
        <FeaturedCard imgSrc="/Images/sp6.png" />
        <FeaturedCard imgSrc="/Images/sp7.png" />
        <FeaturedCard imgSrc="/Images/sp8.png" />
        <FeaturedCard imgSrc="/Images/sp9.png" />
        <FeaturedCard imgSrc="/Images/sp10.png" />
        <FeaturedCard imgSrc="/Images/sp11.png" />
        <FeaturedCard imgSrc="/Images/sp12.png" />
      </div>
      
    </div>
  )
}

export default ShopPage