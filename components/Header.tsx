import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo_ys_od_.svg";
import {CiMenuFries} from "react-icons/ci";
import {RiCloseLargeLine} from "react-icons/ri";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header
            className="bg-black fixed top-0 left-0 right-0 w-full mx-auto z-10"
            style={{
                borderBottom: '1px solid #2d2d2d',
            }}
        >
            <div className=" container mx-auto text-white flex items-center  justify-between">

                <div
                    className="py-3 ml-5 sm:ml-0"
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

                <div className={'block xl:hidden mr-5'}>

                    {
                        !isOpen && (
                            <button className={'p-5 pr-3'} onClick={() => setIsOpen(!isOpen)} style={{scale: "1.8"}}>
                                <CiMenuFries/>
                            </button>
                        )
                    }
                    {
                        isOpen && (
                            <button className={'p-5 pr-3'} onClick={() => setIsOpen(!isOpen)} style={{scale: "1.8"}}>
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
    );
};

export default Header;