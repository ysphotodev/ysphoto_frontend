/*eslint-disable*/
import React, { useState } from 'react';

import Image from 'next/image';

import { Montserrat } from 'next/font/google';
import Link from 'next/link';

import { CiMenuFries } from 'react-icons/ci';
import { RiCloseLargeLine } from 'react-icons/ri';
import adsBack from '../public/assets/images/ads_back.png';

import logo from '../public/assets/logo_ys_od_.svg';
import ContactForm from '@/components/ContactForm';

const monts = Montserrat({ subsets: ['latin'] });

export default function Home() {
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

          <div className={` hidden xl:flex ${monts.className}`}>
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

                <div className={` grid grid-cols-1 ${monts.className}`}>
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
                className={`text-center text-black notoSans text-[2.3rem] sm:text-[4.5rem] uppercase ${monts.className} `}
              >
                Video
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto gap-3">

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/mMjQ9WbAnxk?si=1BvBcAMfQeXw23rS"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/FMat8SmamMs?si=3Lahfqa6r1YJ_hcB"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8bjciDQ9DVU?si=IihePsMR2fLNFQ6u"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />


              <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/79htoTvO4lI?si=oTDQ8o0Obo1armDW"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />


              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zDDQELtyInk?si=g_VzP3otjLLZNhig"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5PehwYfOSjw?si=fmKM0xppdJFy5oVb"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/FUsNVJB0DP0?si=Zp1SCxwUBzFCrASS"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/JKVaHfvSpeU?si=nbPbiJBp7ayIrLrH"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/rdPjoxEGVZY?si=JMWFEZ7YmEdCNjL7"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TYUmXrVQlYk?si=akQtVfjFyGwSzGhz"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/bS6yNwCvd58?si=vHYe3Hx-F4MurO74"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/r00j1gs8xxg?si=JAnUsiXBBYSl-O7E"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/1J1k_gFL3-8?si=2Ey-iLWtvlYRJ4v1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/LCB59SAfnls?si=CX0mSTIK7wA-r2Pz"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

              <iframe
                  className="max-w-[500px]"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/yPPhiId79UI?si=_wDnz4vJEucpLgH1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              />

            </div>

            <div className="sm:py-10 container mx-auto gallery_container  bg-white">
              <div className=" flex flex-col  ">
                <div className=" sm:my-3 py-5 bg-black  max-w-[600px] border border-2 border-black">
                  <p
                      className={`text-center text-white notoSans text-[2.3rem] sm:text-[4.5rem] uppercase ${monts.className} `}
                  >
                    Contact Me
                  </p>

                </div>

                <ContactForm />

              </div>

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
