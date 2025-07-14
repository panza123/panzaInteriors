import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-[#040F0F] text-white py-12 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-10'>

      {/* Brand and Description */}
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold text-white'>panza</h1>
        <p className='text-gray-300'>
          We design & build commercial interiors with a focus on quality, transparency & 100% client satisfaction.
        </p>
        <p className='text-sm text-gray-400'>&copy; {new Date().getFullYear()} Panza. All rights reserved.</p>
      </div>

      {/* Navigation Links */}
      <div>
        <h2 className='text-xl font-semibold mb-4'>Quick Links</h2>
        <ul className='flex flex-col gap-3 text-gray-300'>
    
          <NavLink
            to="/about"
            className="hover:text-white transition duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/design"
            className="hover:text-white transition duration-300"
          >
            Design & Build
          </NavLink>
          <NavLink
            to="/process"
            className="hover:text-white transition duration-300"
          >
            Process
          </NavLink>
          <NavLink to='/project' className='hover:text-white transition duration-300'>
            Project
          </NavLink>
        </ul>
      </div>

      {/* Contact Info */}
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold mb-2'>Contact</h2>
        <p className='text-gray-300'>Email: info@panza.com</p>
        <p className='text-gray-300'>Phone: +234 800 000 0000</p>
        <p className='text-gray-300'>Lagos, Nigeria</p>

        {/* Socials */}
        <div className='flex gap-4 pt-4'>
          <a href="#" className='hover:text-white text-gray-400 transition'>Facebook</a>
          <a href="#" className='hover:text-white text-gray-400 transition'>Instagram</a>
          <a href="#" className='hover:text-white text-gray-400 transition'>LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
