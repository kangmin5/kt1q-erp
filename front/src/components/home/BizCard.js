/* eslint-disable @next/next/no-img-element */
import React from 'react'

const BizCard = (props) => {
  return (
    <div className='my-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 '>
      <div className='border border-gray-200 hover:shadow-lg p-4 mx-2 hover:bg-gray-100 hover:cursor-pointer'>
        <div className="flex flex-col justify-center items-center  ">
          <p className="text-gray-700 hover:font-bold text-base  mb-2 px-6 pb-2 ">{props.name}</p>
          <p className="text-gray-400 hover:font-bold text-sm pb-8"> {props.desc}  </p>
          <img className="object-cover " src={props.image} alt="Sunset in the mountains"/>
        </div>
      </div>

    </div>
    
  )
}

export default BizCard