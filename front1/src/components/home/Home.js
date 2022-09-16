/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'




const Home = () => {
  return (
      <div>
          <div className='flex justify-center items-center py-16 '>
            <Image src={"/top_logo.png"} width={100} height={100} objectFit="fill" />
          </div>
        <div className=' flex w-screen justify-center'>
          <p className='text-lg text-gray-500'>이번달 목표</p>
        </div>
      </div>
  )
}

export default Home