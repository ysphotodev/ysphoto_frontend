/*eslint-disable*/
import React, { useState } from 'react';

import Image from 'next/image';

import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { RiCloseLargeLine } from 'react-icons/ri';
import adsBack from '../public/assets/images/ads_back.png';

import logo from '../public/assets/logo_ys_od_.svg';


export default function Home({ posts }:{posts:{
    attributes:{
      Title:string,
      URL:string,
    }
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
              sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
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
            <div className=" sm:my-3 py-5 bg-white  max-w-[600px]">
              <p
                className={`text-center text-black notoSans text-[2.3rem] sm:text-[4.5rem] uppercase `}
              >
                Advertisment
              </p>

            </div>

            <div className="container grid grid-cols-2 sm:grid-cols-4 gap-3 mx-auto items-center">

              {posts.map((post) => (
                <Image
                  className="hover:rounded-3xl hover:ease-in-out hover:tracking-tight hover:scale-125 hover:duration-75"
                  key={post.id}
                  src={post.attributes.URL}
                  alt={post.attributes.Title}
                  height={1000}
                  width={1000}
                  quality={80}
                />
              ))}

            </div>

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

export async function getStaticProps() {
const data = await fetch('https://sh-dev.xyz/api/advertisments?pagination[start]=0&pagination[limit]=200',{
    headers:{
      Authorization:`Bearer ${process.env.API_TOKEN}`
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
