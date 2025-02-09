import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import adsBack from '../public/assets/images/ads_back.png';
import ava from '../public/assets/IMG_ava_7674_1.jpg';
import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import Header from "@/components/Header";

export default function HomePage({posts}:{
  posts:{
    id:string,
    attributes:{
      title:string,
      url:string,
      positionNumber:string,
      imageUrl:string,
    }
  }[]
}) {

  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <title>Yurchic Sergei - professional photographer & videographer | YS.OD.UA</title>
          <meta name="description" content="Professional photo & video services in Odesa and Ukraine"/>
          <meta name="author" content="Yurchic Sergei"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <div>

          <Header/>



      <div
          className="mx-auto"
          style={{
            backgroundImage: `url("${adsBack.src}")`,
          }}
      >

        <div className="pt-16  container mx-auto gallery_container  bg-white  rounded-3xl">
          <div>
            <div className="grid-cols-1 xl:grid-cols-2 grid  sm:py-5    items-center ">

              <p
                  className={`  mx-auto p-5 bg-white text-black   underline   max-w-[600px] break-keep  text-left  text-[2rem] sm:text-[3.5rem] uppercase `}
              >
                PROFESSIONAL trending photographer
              </p>

              <div className={'flex justify-center items-center mb-5 sm:mb-0'}>
                <Image
                    className="max-w-[300px] sm:max-w-[400px]  border-2  sm:border-4   sm:border-red-600 rounded-3xl "
                    src={ava}
                    alt="author"
                    height={500}
                    width={500}
                    quality={80}

                />
              </div>

            </div>

          </div>

        </div>



        <div className="container p-6 grid grid-cols-1 sm:grid-cols-3 gap-5  mx-auto ">

          {
            posts.map(post=>(
                <Link key={post.id} prefetch={false} href={post.attributes.url}
                      className="items-center  flex flex-col relative hover:bg-white duration-300 hover:scale-105  border border-[0.5px] border-white   bg-gray-950 rounded-2xl">
                  <div className={'py-0 sm:p-10'}>
                    <Image

                        className="max-w-[275px]  rounded-2xl"
                        src={post.attributes.imageUrl}
                        alt="author"
                        height={500}
                        width={500}
                        quality={80}
                    />
                  </div>
                  <p className="  text-black bg-white text-[1.2rem] font-bold uppercase underline absolute bottom-[5px] p-5 left-[10%]">
                    {post.attributes.title}
                  </p>
                </Link>
            ))
          }



        </div>

        <div className="sm:py-10 container mx-auto gallery_container  bg-white">
          <div className=" flex flex-col ">
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
      </>
  );
}

export async function getStaticProps() {
  const data = await fetch('https://ys-api.sh-dev.xyz/api/mains?pagination[start]=0&pagination[limit]=200',{
    headers:{
      Authorization:`Bearer ${process.env.API_TOKEN}`
    }
  })
  const data2 = await data.json()
  const data3 = data2.data.sort((a:any, b:any) => +a.attributes.positionNumber - +b.attributes.positionNumber)
  return {
    props: {
      posts: data3,
    },
    revalidate: 5, // In seconds
  };
}
