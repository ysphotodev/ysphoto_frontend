/*eslint-disable*/
import React, { useState } from 'react';

import Image from 'next/image';

import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { RiCloseLargeLine } from 'react-icons/ri';
import adsBack from '../public/assets/images/ads_back.png';

import logo from '../public/assets/logo_ys_od_.svg';


export default function Home({ posts }:{posts:{
  name:string,
    url:string,
    id:string
  }[]}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header
        className="bg-black fixed w-full mx-auto z-10"
        style={{
          borderBottom: '1px solid #2d2d2d',
        }}
      >
        <div className=" container mx-auto text-white flex items-center justify-between">

          {/* <div className={`px-5 sm:px-0 py-5 mr-10 text-3xl ${monts.className}`}> */}
          {/*  SHCHEDROFF */}
          {/* </div> */}

          <div
            className="py-3 mr-5"
          >
            <Image
              className="max-w-[200px]"
              src={logo}
              alt="logo"
              height={100}
              width={350}
              quality={100}
              sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
            />
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

                <div className={` grid grid-cols-1 `}>
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
                className={`text-center text-black notoSans text-[3rem] sm:text-[4.5rem] uppercase  `}
              >
                Catalogue
              </p>
            </div>

            {/* <SlideshowLightbox */}
            {/*  className="container grid grid-cols-2 sm:grid-cols-4 gap-3 mx-auto items-center" */}
            {/*  // className="container grid grid-cols-2 sm:grid-cols-4 gap-3 mx-auto items-center pointer-events-none sm:pointer-events-auto" */}
            {/*  showThumbnails */}
            {/*  showControls */}
            {/*  downloadImages */}
            {/*  showNavigationDots */}
            {/*  showThumbnailIcon */}
            {/*  showFullScreenIcon */}
            {/*  lightboxIdentifier="lightbox1" */}
            {/*  framework="next" */}
            {/*  images={images} */}
            {/*  // images={posts} */}
            {/*  fullScreen */}
            {/* > */}

            {/*  {images.map((image) => ( */}
            {/*    <Image */}
            {/*      className="hover:rounded-3xl hover:ease-in-out hover:tracking-tight hover:scale-125 hover:duration-75" */}
            {/*      key={image.id} */}
            {/*      src={image.src} */}
            {/*      alt={image.alt} */}
            {/*      height={1000} */}
            {/*      width={1000} */}
            {/*      data-lightboxjs="lightbox1" */}
            {/*      quality={80} */}
            {/*      sizes="(max-width: 640px) 100vw, */}
            {/*            (max-width: 1280px) 50vw, */}
            {/*            (max-width: 1536px) 33vw, */}
            {/*            25vw" */}
            {/*    /> */}
            {/*  ))} */}
            {/* </SlideshowLightbox> */}

            <div className="container grid grid-cols-2 sm:grid-cols-4 gap-3 mx-auto items-center">
              {posts.map((image) => (
                <Image
                  className="hover:rounded-3xl hover:ease-in-out hover:tracking-tight hover:scale-125 hover:duration-75"
                  key={image.id}
                  src={image.url}
                  alt={image.name}
                  height={1000}
                  width={1000}
                  data-lightboxjs="lightbox1"
                  quality={80}
                  sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
                />
              ))}
            </div>

          </div>

        </div>

        {/* <div className="bg-[#EEEEEE]"> */}
        {/*  <div className="container mx-auto "> */}
        {/*    <HeroCarousel/> */}
        {/*  </div> */}
        {/* </div> */}

        <div className="sm:py-10 container mx-auto gallery_container  bg-white">
          <div className=" flex flex-col  ">
            <div className=" sm:my-3 py-5 bg-black  max-w-[600px] border border-2 border-black">
              <p
                className={`text-center text-white notoSans text-[2.3rem] sm:text-[4.5rem] uppercase  `}
              >
                Contact Me
              </p>

            </div>

            <div className="w-full max-w-xl mx-auto">
              <form style={{ boxShadow: '0px 2px 22px 0px rgb(0 0 0 / 15%)' }} className="bg-white px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="phone"
                    placeholder="+380635555555"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    className="resize-none h-36 shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="w-full bg-black hover:bg-white border-transparent border border-2 hover:border-black hover:text-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>

            </div>

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

// export async function getStaticProps() {
//   // const res = await fetch('http://localhost:3002/catalog');
//   const res = await fetch('https://serverysphoto-2bo5oyxgv-ysphotos-projects.vercel.app/catalog');
//
//
//   console.log('resssss ', res)
//
//
//
//   const posts = await res.json();
//
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts: posts.catalogue,
//     },
//   };
// }


export async function getServerSideProps() {
  // const res = await fetch('http://localhost:3002/catalog');
  const res = await fetch('https://server-two-lilac.vercel.app/catalog');

  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: posts.catalogue,
    },
  };
}
