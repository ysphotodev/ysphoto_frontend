/*eslint-disable*/

import React, {useState} from 'react';
import Image from 'next/image';

// import { Montserrat, Roboto } from 'next/font/google';
import Link from 'next/link';
import adsBack from '../public/assets/images/ads_back.png';

import logo from '../public/assets/logo_ys_od_.svg';
import ava from '../public/assets/IMG_ava_7674_1.jpg';
import advertisment from '../public/assets/images/categories/advertisment.jpg';
import catalog from '../public/assets/images/categories/catalog.jpg';
import wedding from '../public/assets/images/categories/wedding.jpg';
import auto from '../public/assets/images/categories/auto.jpg';
import foodstyle from '../public/assets/images/categories/foodstyle.jpg';
import subject from '../public/assets/images/categories/subject.jpg';
import ContactForm from "@/components/ContactForm";

// const monts = Montserrat({ subsets: ['latin'] });
// const roboto = Roboto({ weight: '900', subsets: ['latin'] });


import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";



export default function Home() {


 const [isOpen, setIsOpen] = useState(false)


  return (
    <div>
      <header
        className="bg-black fixed w-full mx-auto z-10"
        style={{
          borderBottom: '1px solid #2d2d2d',
        }}
      >
        <div className=" container mx-auto text-white flex items-center  justify-between">

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

          <div className={'block xl:hidden mr-5'}>

            {
              !isOpen && (
                    <button onClick={() => setIsOpen(!isOpen)} style={{scale: "1.8"}}>
                      <CiMenuFries/>
                    </button>
                )
            }
            {
                isOpen && (
                    <button onClick={() => setIsOpen(!isOpen)} style={{scale: "1.8"}}>
                      <RiCloseLargeLine/>
                    </button>
                )
            }
          </div>


          {
              isOpen && (
                  <div className={'absolute top-[59px] left-0 bg-black  w-full'}>

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

        <div className="pt-16  container mx-auto gallery_container  bg-white ">
          <div>
            <div className="grid-cols-1 xl:grid-cols-2 grid  sm:py-5    items-center ">

              <p
                  className={`  mx-auto p-5 bg-white text-black   underline   max-w-[600px] break-keep  text-left  text-[2rem] sm:text-[3.5rem] uppercase `}
              >
                PROFESSIONAL trending photographer
              </p>

              <div>
                <Image
                    className="max-w-[400px] border border-2  sm:border-4   sm:border-red-600 "
                    src={ava}
                    alt="author"
                    height={500}
                    width={500}
                    quality={100}
                    sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
                />
              </div>

            </div>

          </div>

        </div>

        <div className="container p-6 grid grid-cols-1 sm:grid-cols-3   mx-auto ">

          <Link prefetch={false} href={'/advertisment'}
                className="items-center flex flex-col relative hover:scale-110 ">
            <Image
                className="max-w-[300px] border border-2 "
                src={advertisment}
                alt="author"
                height={500}
                width={500}
                quality={100}
                sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
            />
            <p className="text-black bg-white text-[2rem] font-bold uppercase underline absolute bottom-[5px] p-5 left-[10%] bg-black">
              Advertisment
            </p>
          </Link>

          <Link prefetch={false} href={'/catalog'} className=" items-center flex flex-col relative hover:scale-110 ">
            <Image
                className="max-w-[300px] border border-2 "
                src={catalog}
                alt="author"
                height={500}
                width={500}
                quality={100}
                sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
            />
            <p className="text-black bg-white text-[2rem] font-bold uppercase underline absolute bottom-[5px] p-5 left-[10%] bg-black">
              Catalogue
            </p>
          </Link>

          <Link prefetch={false} href={'/wedding'} className="items-center flex flex-col relative hover:scale-110 ">
            <Image
              className="max-w-[300px] border border-2 "
              src={wedding}
              alt="author"
              height={500}
              width={500}
              quality={100}
              sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
            />
            <p className="text-black bg-white text-[2rem] font-bold uppercase underline absolute bottom-[5px] p-5 left-[10%] bg-black">
              Wedding
            </p>
          </Link>

          <Link prefetch={false} href={'/auto'} className="items-center flex flex-col relative hover:scale-110 ">
            <Image
              className="max-w-[300px] border border-2 "
              src={auto}
              alt="author"
              height={500}
              width={500}
              quality={100}
              sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
            />
            <p className="text-black bg-white text-[2rem] font-bold uppercase underline absolute bottom-[5px] p-5 left-[10%] bg-black">
              Auto
            </p>
          </Link>

          <Link prefetch={false} href={'/food'} className="items-center flex flex-col relative hover:scale-110 ">
            <Image
              className="max-w-[300px] border border-2 "
              src={foodstyle}
              alt="author"
              height={500}
              width={500}
              quality={100}
              sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
            />
            <p className="text-black bg-white text-[2rem] font-bold uppercase underline absolute bottom-[5px] p-5 left-[10%] bg-black">
              Foodstyle
            </p>
          </Link>

          <Link prefetch={false} href={'/subject'} className="items-center flex flex-col relative hover:scale-110 ">
            <Image
              className="max-w-[300px] border border-2 "
              src={subject}
              alt="author"
              height={500}
              width={500}
              quality={100}
              sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
            />
            <p className="text-black bg-white text-[2rem] font-bold uppercase underline absolute bottom-[5px] p-5 left-[10%] bg-black">
              Subject
            </p>
          </Link>

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
