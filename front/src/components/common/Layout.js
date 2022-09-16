import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
      <div className='w-screen h-screen flex flex-col '>
        <Navbar className="fixed top-0" />
        <main className='h-screen'>{children}</main>
        <Footer className="fixed bottom-0 " />
      </div>
  )
}

export default Layout