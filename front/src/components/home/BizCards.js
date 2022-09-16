import React from 'react'
import BizCard from './BizCard'
import bizList from './BizList'


const BizCards = () => {
  return (
      <div className='bg-white max-w-7xl mx-auto  '>
        <div className='flex flex-wrap '>
          {bizList.map(bizlist => (
            <BizCard
              key={bizlist.id}
              name={bizlist.name}
              desc={bizlist.desc}
              image={bizlist.image}
            />
          ))}
        </div>
      </div>
  )
}

export default BizCards