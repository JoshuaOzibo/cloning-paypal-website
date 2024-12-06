import React from 'react'
import UseNavlinks from './buttons/UseNavlinks'
import UseNavLoginBtn from './buttons/UseNavLoginBtn'
const Navbar = () => {
  return (
    <section className='flex justify-between px-8 py-5 items-center bg-blue-500'>
      <div className='flex gap-4 items-center'>
        <img className='w-12' src="https://www.paypalobjects.com/marketing/web/logos/paypal-mark-color_new.svg" alt="paypal logo" />
        <div className='lg:flex hidden gap-2'>
            <UseNavlinks text="Personal" icon="" />
            <UseNavlinks text="Business" icon="" />
            <UseNavlinks text="Partners" icon="" />
            <UseNavlinks text="Developers" icon="" />
        </div>
      </div>
      <div className='lg:flex hidden gap-2'>
      <UseNavlinks text="Help" icon="" />
        <UseNavLoginBtn text="Login" icon="" />
        <UseNavLoginBtn className="bg-black hover:bg-sky-300 text-white" text="Sign Up" icon="" />
      </div>
    </section>
  )
}

export default Navbar
