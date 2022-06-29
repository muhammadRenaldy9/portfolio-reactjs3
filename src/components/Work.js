import React from 'react';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import Pcrud from '../assets/p_crud.png'
import Pcrud2 from '../assets/p_crud2.png'

const Work = () => {
  return (
    <div name='work' className='py-8 w-full text-gray-300 bg-[#3F4E4F]'>
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col w-full h-full'>
        <div className='py-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Project
          </p>
        </div>
        <div className='py-2'>
          <p>
          klik gambar, klik Demo untuk melihat video aplikasinya
          </p>
        </div>

        {/* Container / resposive */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Pcrud})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
                Fullstack Website Authentication CRUD, Client CRUD <span className='text-amber-300'> with Mysql, Nodejs, Expressjs, sequelize, React JS, Tailwindcss</span>
              </span>
              <div className='mt-12 text-center'>
                <a href='https://www.youtube.com/watch?v=ho6-6zmvE3M' target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Pcrud2})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
                Fullstack Website CRUD Travel<span className='text-amber-300'> with Mysql, Nodejs, Expressjs, sequelize, React JS</span>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.youtube.com/watch?v=lWkwyJJ02SQ' target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>

              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${p1})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
                 <span className='text-amber-300'> </span>
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${p2})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
                <span className='text-amber-300'> </span>
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${p1})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
                 <span className='text-amber-300'> </span>
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${p2})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
                 <span className='text-amber-300'> </span>
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
