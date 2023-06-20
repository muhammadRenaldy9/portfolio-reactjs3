import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Galery.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../assets/galery/sentul4.jpg";
import slide_image_2 from "../../assets/galery/telkom-colab3.jpg";
import slide_image_3 from "../../assets/galery/kolam.jpeg";
import slide_image_4 from "../../assets/galery/sentul4.jpg";
import slide_image_5 from "../../assets/galery/telkom-colab3.jpg";
import slide_image_6 from "../../assets/galery/kolam.jpeg";
// import slide_image_3 from '../../assets/galery/selfie.jpeg';
// import slide_image_6 from '../../assets/galery/telkom-colab.jpeg';
// import slide_image_7 from '../../assets/galery/telkom-colab.jpeg';
import { AiFillFastBackward } from "react-icons/ai";
import { AiFillFastForward } from "react-icons/ai";

function Galery() {
  return (
    <div name="" className="py-8 w-full text-gray-300 bg-[#3F4E4F]">
      <div className="max-w-[1000px] mx-auto p-2 flex flex-col w-full h-full">
        <div className="container">
          <div className="py-8 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 title_left">
              Gallery
            </p>
          </div>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_6} alt="slide_image" />
            </SwiperSlide>
            {/* <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide> */}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <AiFillFastBackward />
              </div>
              <div className="swiper-button-next slider-arrow">
                <AiFillFastForward />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Galery;
