import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BangCashBiz = () => {
    const myLoader = ({ src, width, quality=75 }) => {
        return `/${src}?w=${width}&q=${quality || 75}`
      }
  return (
    <div >
        <div>
            <Image loader={myLoader} src="sean.jpg"  alt="bangcash" width={2400} objectFit="cover" height={300}/>
            
        </div>  
        <div className="mx-auto max-w-7xl">
            {/* BreadCrumb Start */}
            <nav className="flex ml-2 my-1" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href="/"><a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Home
                    </a></Link>
                </li>
                <li>
                    <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <Link href="/business"><a className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Business</a></Link>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">뱅캐시</span>
                    </div>
                </li>
                </ol>
            </nav>
            {/* BreadCrumb End */}
              
            <hr className='leading-5 mt-2' />
            <div className='bg-gray-100'>
                <p>안녕하세요</p>
                  <p> 우리의 소원은 통일</p>
            </div>
        </div>
    </div>
  )
}

export default BangCashBiz