import React, { useState } from 'react'

const Experience = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
  
  return (
    <div name='' className='py-8 w-full text-gray-300 bg-[#3F4E4F]'>
        <div className='max-w-[1000px] mx-auto p-2 flex flex-col w-full h-full'>
            <div className='py-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 title_left'>
                Work Experience
                </p>
            </div>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">August 2022 - Saat ini</time>
                    <h3 className=' font-semibold text-gray-900 dark:text-white'>
                        <a
                            href="https://www.unzypsoft.com/" target='_blank'
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                            PT. Permata Karya Jasa ( PGN-Group )
                        </a> 
                    </h3>
                    <h3 class=" font-semibold text-gray-900 dark:text-white mb-4">IT Developer</h3>
                    <h2
                        onClick={toggleAccordion}
                        className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${
                        isOpen ? "" : "rounded-b-none"
                        }`}
                    >
                        <span>Job Desk</span>
                        <svg
                        className={`w-6 h-6 rotate-180 shrink-0 ${isOpen ? "transform" : ""}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        {isOpen ? (
                            <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            ></path>
                        ) : (
                            <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                            ></path>
                        )}
                        </svg>
                    </h2>
                    {isOpen && (
                        <div>
                            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                Membuat Aplikasi Career dengan menggunakan Laravel 9 & mysql
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Identifikasi kebutuhan terkait fitur/fungsi yang diinginkan. 
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Design tampilan admin & user. 
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Development
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Testing
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Deploy
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Setup Server
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Maintenance
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                Memodifikasi aplikasi yang sudah berjalan agar sesuai dengan kebutuhan perusahaan.
                            </div>
                            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            Maintenance Software & Hardware : 
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Instalation windows dan lainnya.
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Troubleshoot printer & scanner.
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className='mr-4'>-</div>
                                    <div>
                                    Upgrade performa laptop dengan mengganti RAM/SSD.
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </li>                  
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">August 2022 - Saat ini</time>
                    <h3 className=' font-semibold text-gray-900 dark:text-white'>
                        <a
                            href="https://www.unzypsoft.com/" target='_blank'
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                            PT. Unzyp Solusi Teknologi
                        </a> 
                    </h3>
                    <h3 class=" font-semibold text-gray-900 dark:text-white mb-4">Frontend Developer</h3>
                    <h2
                        onClick={toggleAccordion}
                        className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${
                        isOpen ? "" : "rounded-b-none"
                        }`}
                    >
                        <span>Job Desk</span>
                        <svg
                        className={`w-6 h-6 rotate-180 shrink-0 ${isOpen ? "transform" : ""}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        {isOpen ? (
                            <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            ></path>
                        ) : (
                            <path
                            fillRule="evenodd"
                            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                            ></path>
                        )}
                        </svg>
                    </h2>
                    {isOpen && (
                        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <div className="flex">
                                <div className='mr-4'>-</div>
                                <div>
                                Mengembangkan aplikasi web yang interaktif dan responsif Menggunakan ReactJS, CSS MediaQuery, Bootstrap, dengan Slicing Figma yang tersedia.
                                </div>
                            </div>
                            <div className="flex">
                                <div className='mr-4'>-</div>
                                <div>
                                Mengintegrasikan API dari backend untuk menampilkan dan memproses data pada aplikasi web.
                                </div>
                            </div>
                            <div className="flex">
                                <div className='mr-4'>-</div>
                                <div>
                                Menerapkan best practices dalam pengembangan aplikasi web, seperti penggunaan state management (Redux).
                                </div>
                            </div>
                            <div className="flex">
                                <div className='mr-4'>-</div>
                                <div>
                                Memperbarui dan memperbaiki fitur yang sudah ada pada aplikasi web.
                                </div>
                            </div>
                            <div className="flex">
                                <div className='mr-4'>-</div>
                                <div>
                                Menggunakan GitLab & GitHub untuk manajemen kode sumber dan kolaborasi dengan 3 tim.
                                </div>
                            </div>
                        </div>
                    )}

                </li>
                <li class="ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2019</time>
                    <h3 className=' font-semibold text-gray-900 dark:text-white'>
                        <a
                            href="https://kreditplus.com/" target='_blank'
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                            PT. Finansia Multi Finance
                        </a> 
                    </h3>
                    <h3 class=" font-semibold text-gray-900 dark:text-white mb-4">CMO</h3>
                </li>
                <li class="ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2018</time>
                    <h3 className=' font-semibold text-gray-900 dark:text-white'>
                        <a
                            href="https://www.rar.co.id/" target='_blank'
                            className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                            PT. Rajawali Anugrah Resources
                        </a> 
                    </h3>
                    <h3 class=" font-semibold text-gray-900 dark:text-white mb-4">Technician</h3>
                </li>
                {/* <li class="ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2017</time>
                    <h3 className=' font-semibold text-gray-900 dark:text-white'>
                        <a
                            href="" target='_blank'
                            className="text-blue-600 dark:text-blue-500 hover:underline disabled"
                            >
                            PT. Rikarya Darma Mitra
                        </a> 
                    </h3>
                    <h3 class=" font-semibold text-gray-900 dark:text-white mb-4">Mechanic</h3>
                </li> */}
            </ol>
        </div>
    </div>

  )
}

export default Experience