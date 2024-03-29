import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im'
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' style={{zIndex: "99"}}>
      <div>
      </div>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='hover:bg-sky-700 rounded-full'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:bg-sky-700 rounded-full'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:bg-sky-700 rounded-full'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:bg-sky-700 rounded-full'>
          <Link to='work' smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className='hover:bg-sky-700 rounded-full'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 '>
        {!nav ? <FaBars className='hover:bg-sky-800' /> : <FaTimes className='hover:bg-sky-100 rounded-full'/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:bg-sky-700 rounded-full'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:bg-sky-700 rounded-full'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:bg-sky-700 rounded-full'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:bg-sky-700 rounded-full'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className='py-6 text-4xl hover:bg-sky-700 rounded-full'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/renaldy9/?original_referer=https%3A%2F%2Fmuhammadrenaldy9.github.io%2F' target="_blank" rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/muhammadRenaldy9' target="_blank" rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#16a34a]'>
            {/* <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://wa.link/ceoa73' target="_blank" rel="noreferrer"
            > */}
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://wa.link/ki76c4' target="_blank" rel="noreferrer"
            >
              WA <ImWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
