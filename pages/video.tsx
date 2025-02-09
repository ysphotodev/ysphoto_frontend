import React from 'react';
import adsBack from '../public/assets/images/ads_back.png';
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";


export default function VideoPage({ posts }:{posts:{
        attributes:{
            Title:string,
            URL:string,
        }
        id:string
    }[]}) {
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
    const data = await fetch('https://ys-api.sh-dev.xyz/api/videos?pagination[start]=0&pagination[limit]=200',{
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
