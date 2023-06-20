import React from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im'

const Contact = () => {
  return (
    <div name='contact' className='p-4 w-full bg-[#3F4E4F] flex justify-center items-center py-4'>
        <form method='POST' action="https://getform.io/f/65e4f414-96a9-4f03-bedc-5969649693e8" className='flex flex-col max-w-[600px] w-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 title_left'>Contact</p>
                <p className='text-gray-300 py-4'>email : muhammadaldy2016@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-lg' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-lg' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-full'>Send</button>
        </form>
        <div>
        <div className='lg:hidden sosmed'>
        <ul>
          <li className='h-[80px] flex justify-between items-center bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/renaldy9/?original_referer=https%3A%2F%2Fmuhammadrenaldy9.github.io%2F' target="_blank" rel="noreferrer"
            >
               <FaLinkedin size={30} />
            </a>
          </li>
          <li className='h-[80px] flex justify-between items-center bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/muhammadRenaldy9' target="_blank" rel="noreferrer"
            >
               <FaGithub size={30} />
            </a>
          </li>
          <li className='h-[80px] flex justify-between items-center bg-[#16a34a]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://wa.link/ki76c4' target="_blank" rel="noreferrer"
            >
               <ImWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
        </div>
    </div>
  )
}

export default Contact