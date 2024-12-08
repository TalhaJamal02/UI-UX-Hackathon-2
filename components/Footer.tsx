import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-white py-8 border-t max-w-full">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-[#252B42] mb-6 lg:mb-0">Bandage</h1>

            {/* Social Icons */}
            <div className="flex gap-4">
              {["facebook2", "instagram2", "twitter2"].map((icon, index) => (
                <Image
                  key={index}
                  src={`/Images/${icon}.svg`}
                  alt={icon}
                  width={24}
                  height={24}
                />
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm text-[#252B42] mt-8">
            {/* Column 1 */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold">Company Info</h3>
              {["About Us", "Carrier", "We are hiring", "Blog"].map((item, index) => (
                <p key={index} className="hover:underline cursor-pointer">{item}</p>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold">Legal</h3>
              {["About Us", "Carrier", "We are hiring", "Blog"].map((item, index) => (
                <p key={index} className="hover:underline cursor-pointer">{item}</p>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold">Features</h3>
              {["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"].map(
                (item, index) => (
                  <p key={index} className="hover:underline cursor-pointer">{item}</p>
                )
              )}
            </div>

            {/* Column 4 */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold">Resources</h3>
              {["IOS & Android", "Watch a Demo", "Customers", "API"].map((item, index) => (
                <p key={index} className="hover:underline cursor-pointer">{item}</p>
              ))}
            </div>

            {/* Column 5 - Subscription */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold">Get In Touch</h3>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="py-2 px-4 border border-gray-300 rounded flex-1"
                />
                <button className="px-4 py-3 bg-[#23A6F0] text-white rounded ">Subscribe</button>
              </div>
              <p className="text-sm text-gray-500">Lorem imp sum dolor Amit</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="text-center text-sm text-gray-500 mt-8">
            <p>Made With Love By Finland All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
