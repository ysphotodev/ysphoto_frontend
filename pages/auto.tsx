/*eslint-disable*/
import React, { useState } from 'react';

import Image from 'next/image';


import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { RiCloseLargeLine } from 'react-icons/ri';
import adsBack from '../public/assets/images/ads_back.png';

import logo from '../public/assets/logo_ys_od_.svg';
import ContactForm from "@/components/ContactForm";
import Modal from "react-modal";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

Modal.setAppElement("#__next"); // Prevents screen readers issues

export default function Home({ posts }:{posts:{
    attributes:{
      Title:string,
      URL:string,
    }
    id:string
  }[]}) {
  const [isOpen, setIsOpen] = useState(false);
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
      <header
        className="bg-black fixed w-full mx-auto z-10"
        style={{
          borderBottom: '1px solid #2d2d2d',
        }}
      >
        <div className=" container mx-auto text-white flex items-center justify-between">

          <div
            className="py-3 mr-5"
          >
            <Link href={'/'} prefetch={false}>
              <Image
                  className="max-w-[200px]"
                  src={logo}
                  alt="logo"
                  height={100}
                  width={350}
                  quality={100}
              />
            </Link>
          </div>

          <div className={` hidden xl:flex `}>
            <Link
              prefetch={false}
              href="/"
              className="px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out border-4  border-transparent hover:border-b-4  hover:border-b-red-600"
            >
              HOME
            </Link>
            <Link
              prefetch={false}
              href="/catalog"
              className="px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out border-4  border-transparent hover:border-b-4  hover:border-b-red-600"
            >
              CATALOGUE
            </Link>
            <Link
              prefetch={false}
              href="/advertisment"
              className="px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out border-4  border-transparent hover:border-b-4  hover:border-b-red-600"
            >
              ADVERTISMENT
            </Link>
            <Link
              prefetch={false}
              href="/wedding"
              className="px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out border-4  border-transparent hover:border-b-4  hover:border-b-red-600"
            >
              WEDDING
            </Link>
            <Link
              prefetch={false}
              href="/auto"
              className="px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out border-4  border-transparent hover:border-b-4  hover:border-b-red-600"
            >
              AUTO
            </Link>
            <Link
              prefetch={false}
              href="/food"
              className="px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out border-4  border-transparent hover:border-b-4  hover:border-b-red-600"
            >
              FOOD
            </Link>
            <Link
              prefetch={false}
              href="/subject"
              className="px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out border-4  border-transparent hover:border-b-4  hover:border-b-red-600"
            >
              SUBJECT
            </Link>
            <Link
              prefetch={false}
              href="/video"
              className="px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out border-4  border-transparent hover:border-b-4  hover:border-b-red-600"
            >
              VIDEO
            </Link>
            <Link
              prefetch={false}
              href="/contacts"
              className="px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out border-4  border-transparent hover:border-b-4  hover:border-b-red-600"
            >
              CONTACTS
            </Link>
          </div>

          <div className="block xl:hidden mr-5">

            {
                !isOpen && (
                <button onClick={() => setIsOpen(!isOpen)} style={{ scale: '1.8' }}>
                  <CiMenuFries />
                </button>
                )
            }
            {
                isOpen && (
                <button onClick={() => setIsOpen(!isOpen)} style={{ scale: '1.8' }}>
                  <RiCloseLargeLine />
                </button>
                )
            }
          </div>

          {
              isOpen && (
              <div className="absolute top-[59px] left-0 bg-black  w-full">

                <div className={` grid grid-cols-1`}>
                  <Link
                    prefetch={false}
                    href="/"
                    className="  px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out    hover:border-b-4  hover:border-b-red-600"
                  >
                    HOME
                  </Link>
                  <Link
                    prefetch={false}
                    href="/catalog"
                    className="  px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out    hover:border-b-4  hover:border-b-red-600"
                  >
                    CATALOGUE
                  </Link>
                  <Link
                    prefetch={false}
                    href="/advertisment"
                    className="  px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out    hover:border-b-4  hover:border-b-red-600"
                  >
                    ADVERTISMENT
                  </Link>
                  <Link
                    prefetch={false}
                    href="/wedding"
                    className="  px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out    hover:border-b-4  hover:border-b-red-600"
                  >
                    WEDDING
                  </Link>
                  <Link
                    prefetch={false}
                    href="/auto"
                    className="  px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out    hover:border-b-4  hover:border-b-red-600"
                  >
                    AUTO
                  </Link>
                  <Link
                    prefetch={false}
                    href="/food"
                    className="  px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out    hover:border-b-4  hover:border-b-red-600"
                  >
                    FOOD
                  </Link>
                  <Link
                    prefetch={false}
                    href="/subject"
                    className="  px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out    hover:border-b-4  hover:border-b-red-600"
                  >
                    SUBJECT
                  </Link>
                  <Link
                    prefetch={false}
                    href="/video"
                    className="  px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out    hover:border-b-4  hover:border-b-red-600"
                  >
                    VIDEO
                  </Link>
                  <Link
                    prefetch={false}
                    href="/contacts"
                    className="  px-6 hover:bg-white hover:text-black py-5  delay-75 transition ease-out    hover:border-b-4  hover:border-b-red-600"
                  >
                    CONTACTS
                  </Link>
                </div>

              </div>
              )
          }

        </div>
      </header>

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
                AUTO
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
            {/*      data-lightboxjs="lightbox1"*/}
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

  const data = await fetch('https://ys-api.sh-dev.xyz/api/cars?pagination[start]=0&pagination[limit]=200', {
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
