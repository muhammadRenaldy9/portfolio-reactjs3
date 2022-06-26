import React from 'react';
import { HiArrowCircleRight } from 'react-icons/hi';
import aldy from '../assets/fotoaldynobg.png'

const Home = () => {
  return (
    <section name="home" className="pt-24 sm:pt-14 bg-[#0a192f]">
    <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-center pl-20 pt-6 sm:pl-52 pr-4 sm:pr-0 lg:w-1/2">
          <p className='text-pink-600'>Hi, my name is</p>
          <p className='text-2xl sm:text-4xl font-bold text-[#ccd6f6]'>R Muhammad Renaldy
        </p>
        <h2 className='text-2xl sm:text-2xl font-bold text-[#8892b0]'>
          Web Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>

        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '>
            View Project
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowCircleRight className='ml-3 ' />
            </span>
          </button>
        </div>
          </div>
          <div class="w-full self-end px-20 lg:w-1/2">
            <div class="w-full mt-10 lg:right-0 lg:mt-9">
              <img src={aldy} alt="Renaldy" class="w-full z-10 mx-auto max-w-full" />
            </div>
          </div>
        </div>
      </div>
      </section>
  );

};




export default Home;
