import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
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
export function HeroCarousel() {
  return (
    <div
      className="embla relative mx-auto"
      style={{
        maxWidth: 'fit-content',
      }}
    >
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={() => undefined}
        onSlideChange={() => undefined}
      >
        <SwiperSlide>
          <div className=" max-w-[400px] mx-auto flex flex-col justify-center items-center">
            <div>
              <p
                className={`pt-20 uppercase  text-xs  text-center text-[#D4B254]  ${roboto.className}`}
                style={{
                  maxWidth: '350px',
                }}
              >
                Quality Craftmanship from build to delivery
              </p>
            </div>

            <div className="">
              <p
                className="py-3  text-center  helvetica"
                style={{
                  maxWidth: '350px',
                  fontSize: '30px',
                }}
              >
                Over 35 years experience designing handmade kitchens
              </p>
            </div>

            <div className="  text-left">
              <p
                className={` text-xs text-center text-[#777777]  ${roboto.className}`}
                style={{
                  maxWidth: '350px',
                }}
              >
                Since my first contact I have received a very high level of
                customer service and advice with my kitchen plans.
                Ben responded very quickly to all of my emails and
                delivery of the kitchen was as planned.
              </p>
            </div>
            <button
              className={` mt-5 p-3 bg-[#D4B254] text-white w-80 rounded-3xl uppercase  ${roboto.className}`}
              style={{
                fontSize: '14px',
              }}
            >
              Frequently Asked Questions
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-20 w-[400px] mx-auto flex flex-col justify-center items-center">
            <div className={' '}>
              <p className={` uppercase  text-xs  text-center text-[#D4B254]  ${roboto.className}`}>
                Quality Craftmanship from build to delivery
              </p>
            </div>

            <div className="">
              <p
                className="py-3  text-center  helvetica"
                style={{
                  maxWidth: '400px',
                  fontSize: '30px',
                }}
              >
                Over 35 years experience designing handmade kitchens
              </p>
            </div>

            <div className="  text-left">
              <p className={` text-xs text-center text-[#777777]  ${roboto.className}`}>
                Since my first contact I have received a very high level of
                customer service and advice with my kitchen plans.
                Ben responded very quickly to all of my emails and
                delivery of the kitchen was as planned.
              </p>
            </div>
            <button
              className={` mt-5 p-3 bg-[#D4B254] text-white w-80 rounded-3xl uppercase  ${roboto.className}`}
              style={{
                fontSize: '14px',
              }}
            >
              Frequently Asked Questions
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-20 w-[400px] mx-auto flex flex-col justify-center items-center">
            <div className={' '}>
              <p className={` uppercase  text-xs  text-center text-[#D4B254]  ${roboto.className}`}>
                Quality Craftmanship from build to delivery
              </p>
            </div>

            <div className="">
              <p
                className="py-3  text-center  helvetica"
                style={{
                  maxWidth: '400px',
                  fontSize: '30px',
                }}
              >
                Over 35 years experience designing handmade kitchens
              </p>
            </div>
            <div className="  text-left">
              <p className={` text-xs text-center text-[#777777]  ${roboto.className}`}>
                Since my first contact I have received a very high level of
                customer service and advice with my kitchen plans.
                Ben responded very quickly to all of my emails and
                delivery of the kitchen was as planned.
              </p>
            </div>
            <button
              className={` mt-5 p-3 bg-[#D4B254] text-white w-80 rounded-3xl uppercase  ${roboto.className}`}
              style={{
                fontSize: '14px',
              }}
            >
              Frequently Asked Questions
            </button>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
