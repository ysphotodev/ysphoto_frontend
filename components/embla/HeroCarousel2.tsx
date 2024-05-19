import React from 'react';
import {
  Navigation, Pagination, Scrollbar, A11y,
// eslint-disable-next-line import/no-unresolved
} from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/scrollbar';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '300' });

// eslint-disable-next-line import/prefer-default-export
export function HeroCarousel2() {
  return (
    <div className="container embla relative mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
                // navigation
        pagination={{ clickable: true }}
        onSwiper={() => undefined}
        onSlideChange={() => undefined}
      >
        <SwiperSlide>
          <div className="py-20 w-[400px] mx-auto flex flex-col justify-center items-center">
            <div className={' '}>
              <p className={` uppercase  text-white text-xs  text-center  ${roboto.className}`}>
                Design and order your new kitchen online today
              </p>
            </div>

            <div className="">
              <p
                className="py-3  text-center text-white  helvetica "
                style={{
                  maxWidth: '500px',
                  fontSize: '30px',
                }}
              >
                Bespoke & made to measure handmade kitchen design
              </p>
            </div>
            <button
              className={` mt-5 p-3 bg-[#D4B254] text-white w-40 rounded-3xl uppercase  ${roboto.className}`}
              style={{
                fontSize: '14px',
              }}
            >
              Order now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-20 w-[400px] mx-auto flex flex-col justify-center items-center">
            <div className={' '}>
              <p className={` uppercase  text-white text-xs  text-center  ${roboto.className}`}>
                Design and order your new kitchen online today
              </p>
            </div>

            <div className="">
              <p
                className="py-3  text-center text-white  helvetica "
                style={{
                  maxWidth: '500px',
                  fontSize: '30px',
                }}
              >
                Bespoke & made to measure handmade kitchen design
              </p>
            </div>
            <button
              className={` mt-5 p-3 bg-[#D4B254] text-white w-40 rounded-3xl uppercase  ${roboto.className}`}
              style={{
                fontSize: '14px',
              }}
            >
              Order now
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-20 w-[400px] mx-auto flex flex-col justify-center items-center">
            <div className={' '}>
              <p className={` uppercase  text-white text-xs  text-center  ${roboto.className}`}>
                Design and order your new kitchen online today
              </p>
            </div>

            <div className="">
              <p
                className="py-3  text-center text-white  helvetica "
                style={{
                  maxWidth: '500px',
                  fontSize: '30px',
                }}
              >
                Bespoke & made to measure handmade kitchen design
              </p>
            </div>
            <button
              className={` mt-5 p-3 bg-[#D4B254] text-white w-40 rounded-3xl uppercase  ${roboto.className}`}
              style={{
                fontSize: '14px',
              }}
            >
              Order now
            </button>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
