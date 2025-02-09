import React, { useState } from 'react';
import Link from "next/link";

import { BsInstagram } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";

/*eslint-disable*/



function ContactForm() {
  const [isBlocked, setIsblocked] = useState(false);
  const submitHandler = (e:React.BaseSyntheticEvent) => {
    e.preventDefault();
    setIsblocked(true);

    const formdata = new FormData(e.target);
    const payload = Object.fromEntries(formdata);

    const sendData = async () => {
      const req = await fetch(
        'https://server-two-lilac.vercel.app/form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify(payload),
        },
      );
      const res = await req.json();
    };
    sendData();

    e.target.reset();
    setIsblocked(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className={'my-10 flex gap-7 items-center px-3'}>
        <Link
            href={'tel:+380637565959'}
            prefetch={false}
            className={'py-5 px-6 border  rounded bg-black text-white hover:bg-white hover:text-black hover:border-black duration-300  '}
        >

          <div className="flex items-center gap-5">
            <FaPhoneVolume size={20} />
            <p>+380637565959</p>
          </div>


        </Link>

        <div>
          <Link
              href={'https://www.instagram.com/yurchicsergei/'}
              prefetch={false}
          >
            <BsInstagram
                className={'hover:bg-black duration-300 hover:text-white rounded-xl p-2'}
                size={65}
            />
          </Link>

        </div>


      </div>
      <form
        onSubmit={(e) => submitHandler(e)}
        style={{ boxShadow: '0px 2px 22px 0px rgb(0 0 0 / 15%)' }}
        className="bg-white px-8 pt-6 pb-8 mb-4 rounded"
      >
        <fieldset disabled={isBlocked}>
          <div className="mb-4">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>

            <input
              name="phone"
              className="shadow appearance-none border  rounded w-full py-2 px-3
              text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="phone"
              placeholder="+380635555555"
            />
          </div>
          <div className="mb-6">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Message"
              className="resize-none h-36 shadow appearance-none border
              rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
              focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-black hover:bg-white border-transparent border
              border-2 hover:border-black hover:text-black  text-white font-bold py-2 px-4
              rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>

    </div>
  );
}

export default ContactForm;
