import React from 'react'

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
    </div>
  )
}

export default Contact