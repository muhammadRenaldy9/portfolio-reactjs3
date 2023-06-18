import React from 'react';
import p2 from '../assets/p2.png'
import Pcrud from '../assets/p_crud.png'
import Pcrud2 from '../assets/p_crud2.png'
import Tokomutu from '../assets/work/tokomutu2.png'
import TelkomMetra from '../assets/work/telkom-metra.png'
import Unzyp from '../assets/work/unzypnew.png'
import UnzypProtocol from '../assets/work/unzyo-protocol.jpeg'
import Spacestation from '../assets/work/spacestation.png'
import Samsung from '../assets/work/samsung-combine.png'
import { BsFillEyeFill } from "react-icons/bs";

const Work = () => {
  return (
    <div name='work' className='py-8 w-full text-gray-300 bg-[#3F4E4F]'>
      <div className='max-w-[1000px] mx-auto p-2 flex flex-col w-full h-full'>
        <div className='py-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 title_left'>
            Project
          </p>
        </div>
        <div className='py-2'>
          {/* <p>
          klik gambar, klik Demo untuk melihat video aplikasinya
          </p> */}
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
            style={{ backgroundImage: `url(${Pcrud})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
                Fullstack Website Authentication CRUD, Client CRUD <span className='text-amber-300'> with Mysql, Nodejs, Expressjs, sequelize, React JS, Tailwindcss</span>
              </span>
              {/* <div className='mt-12 text-center'>
                <a href='https://www.youtube.com/watch?v=ho6-6zmvE3M' target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div> */}
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
              {/* <div className='pt-8 text-center'>
                <a href='https://www.youtube.com/watch?v=lWkwyJJ02SQ' target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
              </div> */}
            </div>
          </div>
          {/* <div
            style={{ backgroundImage: `url(${p2})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
                 <span className='text-amber-300'> </span>
              </span>
            </div>
          </div> */}
          <div
            style={{ backgroundImage: `url(${Tokomutu})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              Tokomutu application<span className='text-amber-300'> built using Laravel8 backend, ReactJS & TS frontend, DB PostgreSQL, and Google Analytics</span>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://tokomutu.com/' target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-sky-700'>
                    <BsFillEyeFill/>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TelkomMetra})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              Telkom Metra application management business<span className='text-amber-300'> built using Laravel9 backend, DB Oracle</span>
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Unzyp})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              Unzyp Portfolio<span className='text-amber-300'> built using Laravel9</span>
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${UnzypProtocol})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              Unzyp NFT application<span className='text-amber-300'> built using ReactJS</span>
              </span>
              <div className='pt-8 text-center'>
                <a href='https://app.unzyp.io/login' target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-sky-700'>
                    <BsFillEyeFill/>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Spacestation})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              Spacestation six NFT<span className='text-amber-300'> built using NextJS</span>
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Samsung})` }}
            className='shadow-lg shadow-[#166534] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='text-center opacity-0 group-hover:opacity-100'>
              <span className='text-sm font-bold text-white tracking-wider'>
              Samsung Sales Kit<span className='text-amber-300'> built using Laravel9, Flutter</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
