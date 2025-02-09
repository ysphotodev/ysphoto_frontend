import React, { useState } from 'react';
import Image from 'next/image';
import adsBack from '../public/assets/images/ads_back.png';
import ContactForm from "@/components/ContactForm";
import Modal from "react-modal";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Header from "@/components/Header";

Modal.setAppElement("#__next"); // Prevents screen readers issues


export default function WeddingPage({ posts }:{posts:{
    attributes:{
      Title:string,
      URL:string,
    }
    id:string
  }[]}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index:number) => {
    setSelectedIndex(index);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };




  return (
    <div>
      <Header/>

      <div
        className="mx-auto"
        style={{
          backgroundImage: `url("${adsBack.src}")`,
        }}
      >

        <div className="pt-16 sm:py-20 container mx-auto gallery_container ">
          <div className=" flex flex-col  ">
            <div className=" sm:my-3 py-5 bg-white  max-w-[500px]">
              <p
                  className={`text-center text-black notoSans text-[2.3rem] sm:text-[4.5rem] uppercase  `}
              >
                Wedding
              </p>

            </div>

            {/*<div className="container grid grid-cols-2 sm:grid-cols-4 gap-3 mx-auto items-center">*/}

            {/*  {posts.map((image) => (*/}
            {/*    <Image*/}
            {/*      className="hover:rounded-3xl hover:ease-in-out hover:tracking-tight hover:scale-125 hover:duration-75"*/}
            {/*      key={image.id}*/}
            {/*      src={image.attributes.URL}*/}
            {/*      alt={image.attributes.Title}*/}
            {/*      height={1000}*/}
            {/*      width={1000}*/}
            {/*      quality={80}*/}
            {/*    />*/}
            {/*  ))}*/}

            {/*</div>*/}


            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
              {posts.map((src, index) => (
                  <Image
                      key={index}
                      src={src.attributes.URL}
                      alt={`Thumbnail ${index}`}
                      className="cursor-pointer w-full h-[350px] object-cover"
                      onClick={() => openModal(index)}
                      width={1000}
                      height={1000}
                  />
              ))}
            </div>


            <Modal
                isOpen={isOpenModal}
                onRequestClose={closeModal}
                contentLabel="Image Lightbox"
                className="fixed z-50  inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4"
            >


              <Swiper
                  initialSlide={selectedIndex}
                  navigation={true}
                  pagination={true}
                  // modules={[Navigation, Pagination]}
                  modules={[Navigation]}
                  // className="w-full max-w-3xl"
                  className={'max-w-[500px]'}
              >
                {posts.map((src, index) => (
                    <SwiperSlide key={index}>
                      <button onClick={closeModal} className="z-50 absolute top-4 right-4 text-white text-3xl">
                        ✖
                      </button>
                      <Image
                          src={src.attributes.URL}
                          alt={`Slide ${index}`}
                          // className=" h-auto max-h-[80vh] mx-auto object-cover"
                          className="object-cover mx-auto max-h-[80vh] "
                          width={1000}
                          height={1000}
                      />
                    </SwiperSlide>
                ))}
              </Swiper>
            </Modal>


          </div>

        </div>


        <div className="sm:py-10 container mx-auto gallery_container  bg-white">
          <div className=" flex flex-col  ">
            <div className=" sm:my-3 py-5 bg-black  max-w-[600px] border border-2 border-black">
              <p
                  className={`text-center text-white notoSans text-[2.3rem] sm:text-[4.5rem] uppercase  `}
              >
                Contact Me
              </p>

            </div>

            <ContactForm/>

          </div>

        </div>

      </div>

      <footer
          className=" bg-black"
      >
        <p className="py-20 text-center text-gray-500 text-xs">
          &copy;2024 Yurchic Sergei the photographer. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch('https://ys-api.sh-dev.xyz/api/weddings?pagination[start]=0&pagination[limit]=200', {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  })
  const data2 = await data.json()

  return {
    props: {
      posts: data2.data,
    },
    revalidate: 5, // In seconds
  };
}
