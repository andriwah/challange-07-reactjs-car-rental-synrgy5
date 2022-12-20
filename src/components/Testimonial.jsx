import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import Photo_1 from '../assets/img_photo.png';
import Photo_2 from '../assets/img_photo(1).png';

function Carousel() {
  return (
    <div className="mx-3">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-3">Testimonial</h1>
        <p className="mb-5">Berbagai review positif dari para pelanggan kami</p>
      </div>
      <Swiper
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        spaceBetween={10}
        loop={false}
        slidesPerView={2}
        navigation
        className="h-fit"
      >
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[200px] w-[90%] lg:w-[28rem] rounded-lg mx-auto flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[300px]" src={Photo_1} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[12px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[200px] w-[90%] lg:w-[28rem] rounded-lg mx-auto flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[300px]" src={Photo_2} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[12px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[200px] w-[90%] lg:w-[28rem] rounded-lg mx-auto flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[300px]" src={Photo_1} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[12px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[200px] w-[90%] lg:w-[28rem] rounded-lg mx-auto flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[300px]" src={Photo_2} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[12px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[200px] w-[90%] lg:w-[28rem] rounded-lg mx-auto flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[300px]" src={Photo_1} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[12px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1F3FF] h-[200px] w-[90%] lg:w-[28rem] rounded-lg mx-auto flex gap-5 items-center justify-center drop-shadow-md px-12">
            <div>
              <img className="w-[300px]" src={Photo_2} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-[12px]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="text-sm font-bold">John Dee 32, Bromo</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
