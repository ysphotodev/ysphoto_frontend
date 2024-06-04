/*eslint-disable*/
import React, { useState } from 'react';

import Image from 'next/image';

// import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { RiCloseLargeLine } from 'react-icons/ri';
import adsBack from '../public/assets/images/ads_back.png';

import logo from '../public/assets/logo_ys_od_.svg';
import ContactForm from "@/components/ContactForm";

// const monts = Montserrat({ subsets: ['latin'] });

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
                        <div className=" sm:my-3 py-5 bg-white  max-w-[500px]">
                            <p
                                className={`text-center text-black notoSans text-[2.3rem] sm:text-[4.5rem] uppercase  `}
                            >
                                Video
                            </p>

                        </div>

                        <div className="container grid grid-cols-2 sm:grid-cols-3 gap-3 mx-auto items-center">

                            {posts.map((post) => (
                                <iframe key={post.id} width="460" height="315"
                                        src={post.attributes.URL}
                                        title={post.attributes.Title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
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
    const data = await fetch('https://sh-dev.xyz/api/videos?pagination[start]=0&pagination[limit]=200',{
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
