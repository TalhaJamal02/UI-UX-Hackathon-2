import Image from 'next/image'
import React from 'react'

function EditorSection() {
  return (
    <div>
      <div className=' text-center mb-10'>
        <h1 className=' text-2xl font-bold text-[#252B42] '>EDITOR'S PICK</h1>
        <p className=' text-[#737373] mt-3'>Problems trying to resolve the conflict between </p>
      </div>

      <div className=" flex flex-col lg:flex-row items-center justify-center gap-[30px]">
        <Image
          src={"/Images/editor1.png"}
          alt="Men"
          width={510}
          height={490}
          className="object-contain"
        />

        <Image
          src={"/Images/editor2.png"}
          alt="Women"
          width={240}
          height={500}
          className="object-contain"
        />
        <div className=' flex flex-col gap-4'>
          <Image
            src={"/Images/editor3.png"}
            alt="Accessories"
            width={240}
            height={242}
            className="object-contain"
          />
          <Image
            src={"/Images/editor4.png"}
            alt="Kids"
            width={240}
            height={242}
            className="object-contain"
          />
        </div>
      </div>

    </div>
  )
}

export default EditorSection