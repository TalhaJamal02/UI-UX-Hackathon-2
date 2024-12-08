"use client";

import { useState } from 'react'
import TopHeader from './TopHeader'
import { LucideChevronDown, MenuIcon,  User, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=' w-full'>
      <TopHeader />

      <div className="mx-4 my-4 xl:mx-8">
        <nav className="flex justify-between items-center h-[58px]">
          {/* Logo */}
          <h1 className="text-[#252B42] font-bold text-2xl">Bandage</h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex flex-row gap-6 text-[#737373] font-bold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li className="flex gap-2 text-black">
              <Link href={"/shop"}>Shop</Link> <LucideChevronDown />
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/pricing"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link href={"/ourteam"}>Our Team</Link>
            </li>
          </ul>

          {/* Login and Icons */}
          <div className="hidden lg:flex text-[#23A6F0] font-bold gap-3 items-center">
            <User className="outline-[#23A6F0] w-5 h-5" />
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>/ Register</Link>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Image
              src={"/Images/search.svg"}
              alt="search"
              width={56}
              height={56}
              className="object-contain"
            />
            <Link href={"/cart"}>
              <Image
                src={"/Images/cart.svg"}
                alt="cart"
                width={56}
                height={46}
                className="object-contain"
              />
            </Link>
            <Link href={"/wishlist"}>
              <Image
                src={"/Images/heart.svg"}
                alt="heart"
                width={56}
                height={46}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 bg-white p-4 rounded-lg shadow-xl">
            <ul className="flex flex-col gap-4 text-[#737373] font-bold">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li className="flex gap-2 text-black">
                <Link href={"/shop"}>Shop</Link> <LucideChevronDown />
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/pricing"}>Pricing</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/ourteam"}>Our Team</Link>
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-4 text-[#23A6F0] font-bold">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <Link href={"/login"}>Login</Link>
                <Link href={"/register"}>/ Register</Link>
              </div>
              <div className="flex items-center justify-evenly ">
                <Image
                  src={"/Images/search.svg"}
                  alt="search"
                  width={56}
                  height={56}
                  className="object-contain"
                />
                <Link href={"/cart"}>
                  <Image
                    src={"/Images/cart.svg"}
                    alt="cart"
                    width={56}
                    height={46}
                    className="object-contain"
                  />
                </Link>
                <Link href={"/wishlist"}>
                  <Image
                    src={"/Images/heart.svg"}
                    alt="heart"
                    width={56}
                    height={46}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar