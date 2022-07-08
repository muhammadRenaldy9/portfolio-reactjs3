import React from 'react';

const About = () => {
  return (
    <div name='about' className='py-20 w-full bg-[#3F4E4F] text-gray-300'>
      <div className='flex flex-col items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='lg:pl-28'>
              <p>Name :  R Muhammad Renaldy</p>
              <p>Age : 26 Tahun</p>
              <p>Gender :  Male</p>
              <p>Address :  Otista 82, Jatinegara East Jakarta</p>
            </div>
            <div>
              <p>I am a fresh graduate web developer on web application and 
someone who likes to learn new interesting and challenging 
cases at work, and responsible focused on finding the best 
alternative solution to various problems.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
