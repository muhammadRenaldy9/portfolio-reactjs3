import React from "react";
import './about.css'

const About = () => {
  return (
    <div name="about" className="py-20 w-full bg-[#3F4E4F] text-gray-300">
      <div className="flex flex-col items-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 title_left">
            About
          </p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="lg:pl-28">
            <table rules="rows">
              <tr>
                <td class="" style={{paddingRight: '55px'}}>Name</td>
                <td class="">:</td>
                <td class="pl-4">R Muhammad Renaldy</td>
              </tr>
              <tr>
                <td class="">Age</td>
                <td class="">:</td>
                <td class="pl-4">27</td>
              </tr>
              <tr>
                <td class="">Gender</td>
                <td class="">:</td>
                <td class="pl-4">Male</td>
              </tr>
              <tr>
                <td class="">Address</td>
                <td class="">:</td>
                <td class="pl-4">Bidaracina, East Jakarta</td>
              </tr>
              <tr>
                <td class="">Education</td>
                <td class="">:</td>
                <td class="pl-4">D3 - Univ Bina Sarana</td>
              </tr>
              <tr>
                <td class=""></td>
                <td class=""></td>
                <td class="pl-4">Informatika</td>
              </tr>
              <tr>
                <td class=""></td>
                <td class=""></td>
                <td class="pl-4"></td>
              </tr>
            </table>
          </div>
          <div>
            <p>
            I am Frontend Developer. I have experience in building attractive and responsive user interfaces for various projects.
I am also experienced in the field of backend using laravel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
