/*eslint-disable*/
import React from 'react';
import adsBack from '../public/assets/images/ads_back.png';
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";



export default function ContactsPage() {
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
                                Contacts
                            </p>

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
