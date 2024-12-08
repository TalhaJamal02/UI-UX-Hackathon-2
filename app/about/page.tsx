import Image from 'next/image'
import React from 'react'

function AboutPage() {
  return (
    <div className=" h-full w-full">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between px-4 lg:px-12 py-8 lg:py-16 space-y-8 lg:space-y-0">
        <div className="flex flex-col items-center lg:items-start justify-between space-y-4 lg:space-y-6 text-center lg:text-left">
          <p className="text-[#252B42] font-bold text-base lg:text-lg">ABOUT COMPANY</p>
          <h1 className="text-[32px] lg:text-[58px] text-[#252B42] font-bold leading-snug">
            ABOUT US
          </h1>
          <p className="text-[16px] lg:text-[20px] text-[#737373] max-w-[500px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="px-6 lg:px-[40px] py-3 lg:py-[15px] text-white bg-[#23A6F0] rounded font-bold">
            Get Quote Now
          </button>
        </div>
        <div className="w-full flex justify-end">
          <Image
            src="/Images/none.png"
            alt="img"
            width={500}
            height={729}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row justify-center items-center gap-8 m-4 xl:m-12">
        <div className=' text-center'>
          <h1 className=' text-[58px] text-[#252B42] font-bold'>15k</h1>
          <p className=' text-[#737373]'>Happy Customers</p>
        </div>
        <div className=' text-center'>
          <h1 className=' text-[58px] text-[#252B42] font-bold'>150k</h1>
          <p className=' text-[#737373]'>Monthly Visitors</p>
        </div>
        <div className=' text-center'>
          <h1 className=' text-[58px] text-[#252B42] font-bold'>15</h1>
          <p className=' text-[#737373]'>Countries Worldwide</p>
        </div>
        <div className=' text-center'>
          <h1 className=' text-[58px] text-[#252B42] font-bold'>100+</h1>
          <p className=' text-[#737373]'>Top Partners</p>
        </div>
      </div>

      <div className=' mt-24 pt-16 pb-16'>
        <div className=' flex flex-col justify-center items-center gap-2'>
          <h1 className=' text-[40px] text-[#252B42] font-bold'>Meet Our Team</h1>
          <p className=' text-[#737373]'>Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12 py-8">
          {[
            { image: "user1.png", name: "Username", profession: "Profession" },
            { image: "user2.png", name: "Username", profession: "Profession" },
            { image: "user3.png", name: "Username", profession: "Profession" },
          ].map((user, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Image
                src={`/Images/${user.image}`}
                alt={user.name}
                width={316}
                height={231}
                className="object-contain w-full max-w-[316px] h-auto"
              />
              <h2 className="text-[#252B42] text-base">{user.name}</h2>
              <p className="text-[#737373]">{user.profession}</p>
              <div className="flex gap-4">
                {["facebook2", "instagram2", "twitter2"].map((icon, idx) => (
                  <Image
                    key={idx}
                    src={`/Images/${icon}.svg`}
                    alt={icon}
                    width={24}
                    height={24}
                    className="cursor-pointer hover:opacity-75 transition-opacity"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className=' mt-24 pt-16 pb-16'>
          <div className=' text-center'>
            <h1 className=' text-[40px] text-[#252B42] font-bold'>Big Companies Are Here</h1>
            <p className=' text-[#737373]'>Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics </p>
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
        </div>
      </div>

      <div className=' pt-16 pb-16 my-8 '>
        <div className="h-auto md:h-[650px] flex flex-col-reverse md:flex-row justify-between items-center bg-[#2A7CC7] px-4 lg:px-12 py-8 md:py-0">
          <div className="flex flex-col justify-evenly items-start gap-4 md:gap-6 text-center md:text-left">
            <p className="text-xs md:text-sm tracking-wide text-white">WORK WITH US</p>
            <h1 className="text-[28px] md:text-[40px] font-bold text-white leading-tight md:leading-snug">
              Now Let's grow Yours
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-[300px] md:max-w-[400px] text-white">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
            </p>
            <button className="px-6 py-3 md:px-10 md:py-4 text-sm md:text-lg bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-[#2A7CC7] transition duration-300">
              Button
            </button>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <Image
              src="/Images/about1.png"
              alt="img"
              width={590}
              height={640}
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage