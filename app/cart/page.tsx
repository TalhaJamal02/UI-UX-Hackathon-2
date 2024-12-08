import { ChevronRight, Eye, Heart, ShoppingCart } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

function CartPage() {
  return (
    <div className=' h-full w-full '>
      <div className=' m-6 flex gap-2'>
        <p>Home</p><ChevronRight className=' h-6 w-6 text-[#BDBDBD]' />
        <p className=' text-[#BDBDBD]'>Cart</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-4">
        {/* Left Section */}
        <div className=" mx-auto h-auto">
          <div className="flex flex-col items-start  gap-6">
            {/* Main Image */}
            <Image
              src={"/Images/carousel.png"}
              alt="Main Image"
              width={506}
              height={450}
              className="w-full max-w-md object-cover"
            />
            {/* Thumbnail Images */}
            <div className="flex gap-4">
              <Image
                src={"/Images/carousel1.png"}
                alt="Thumbnail 1"
                width={100}
                height={75}
                className="w-24 h-20 object-cover"
              />
              <Image
                src={"/Images/carousel2.png"}
                alt="Thumbnail 2"
                width={100}
                height={75}
                className="w-24 h-20 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Title */}
          <h1 className="text-[20px] text-[#252B42}">Floating Phone</h1>

          {/* Rating */}
          <div className="flex gap-2 items-center">
            <Image src={"/Images/Stars.svg"} alt="Stars" width={130} height={22} />
            <p className="text-[#737373]">10 Reviews</p>
          </div>

          {/* Price */}
          <h2 className="text-2xl font-bold text-[#252B42]">$1,139.33</h2>

          {/* Availability */}
          <p className="text-[#737373] flex items-center gap-2">
            Availability: <span className="text-[#23A6F0] font-bold">In Stock</span>
          </p>

          {/* Description */}
          <p className="text-[#858585] leading-relaxed">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>

          {/* Color Options */}
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
            <div className="w-6 h-6 bg-green-600 rounded-full"></div>
            <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="px-4 py-2 rounded-md text-white bg-[#23A6F0]">
              Select Options
            </button>
            <Heart className="w-6 h-6 cursor-pointer" />
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
            <Eye className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center mt-14'>
        <button className=' px-6 py-6 border- text-[#737373]'>Description</button>
        <button className=' px-6 py-6 border-none text-[#737373]'>Additional Information</button>
        <button className=' px-6 py-6 border- text-[#737373]'>Reviews(0)</button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Left Section */}
        <div className="relative bg-pink-100 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/Images/cartimg.png" // Replace with your actual image path
            alt="Decorative room"
            width={316}
            height={372}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Center Section */}
        <div className="text-section space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">the quick fox jumps over</h1>
          <p className="text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">the quick fox jumps over</h1>
          <ul className="space-y-1 text-gray-600">
            <li className="flex items-center">
              <span className="mr-2">&gt;</span> the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center">
              <span className="mr-2">&gt;</span> the quick fox jumps over the lazy dog
            </li>
            <li className="flex items-center">
              <span className="mr-2">&gt;</span> the quick fox jumps over the lazy dog
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CartPage
