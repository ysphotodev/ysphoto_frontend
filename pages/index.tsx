import React, {useState} from 'react';
import Image from 'next/image';


import Link from 'next/link';
import adsBack from '../public/assets/images/ads_back.png';

import logo from '../public/assets/logo_ys_od_.svg';
import ava from '../public/assets/IMG_ava_7674_1.jpg';
import ContactForm from "@/components/ContactForm";


import { CiMenuFries } from "react-icons/ci";
import { RiCloseLargeLine } from "react-icons/ri";
import Head from "next/head";




export default function Home({posts}:{
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

const aa = {
  id: 7,
  attributes: {
    title: 'Subject',
    url: 'https://ys.od.ua/subject',
    positionNumber: '6',
    createdAt: '2024-06-01T20:24:30.234Z',
    updatedAt: '2024-06-01T20:24:33.299Z',
    publishedAt: '2024-06-01T20:24:33.183Z',
    imageUrl: 'https://res.cloudinary.com/dscdfmsdw/image/upload/v1717273449/subject_89430cfa24.jpg'
  }
}


  const [isOpen, setIsOpen] = useState(false)


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

        <div className="pt-16  container mx-auto gallery_container  bg-white  rounded-3xl">
          <div>
            <div className="grid-cols-1 xl:grid-cols-2 grid  sm:py-5    items-center ">

              <p
                  className={`  mx-auto p-5 bg-white text-black   underline   max-w-[600px] break-keep  text-left  text-[2rem] sm:text-[3.5rem] uppercase `}
              >
                PROFESSIONAL trending photographer
              </p>

              <div>
                <Image
                    className="max-w-[400px] border border-2  sm:border-4   sm:border-red-600 rounded-3xl "
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

        <div className="container p-6 grid grid-cols-1 sm:grid-cols-3 gap-3  mx-auto ">



          {
            posts.map(post=>(


                <Link key={post.id} prefetch={false} href={post.attributes.url}
                      className="items-center flex flex-col relative hover:bg-white duration-300 hover:scale-105  border border-white   bg-gray-950 rounded-3xl">
                  <Image
                      className="max-w-[300px]  "
                      src={post.attributes.imageUrl}
                      alt="author"
                      height={500}
                      width={500}
                      quality={80}
                  />
                  <p className=" rounded-xl  text-black bg-white text-[2rem] font-bold uppercase underline absolute bottom-[5px] p-5 left-[10%] bg-black">
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
  const data = await fetch('https://sh-dev.xyz/api/mains?pagination[start]=0&pagination[limit]=200',{
    headers:{
      Authorization:`Bearer ${process.env.API_TOKEN}`
    }
  })

  const data2 = await data.json()

  const data3 = data2.data.sort((a:any, b:any) => +a.attributes.positionNumber - +b.attributes.positionNumber)

  return {
    props: {
      // posts: data2.data,
      posts: data3,
    },
    revalidate: 5, // In seconds
  };
}
