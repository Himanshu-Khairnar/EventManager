import React from 'react'
import { Link } from 'react-router-dom';
import Model from '../Components/Model';
import EventsBlog from '../Components/EventsBlog';
export default function GetUserDetails() {
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24 ">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Hello Himanshu Khairnar!
            </h2>

            <div className="hidden text-gray-500 md:mt-4 md:block">
              <span className="text-gray-700">Your Details: </span>
              <p>Name: Himanshu Khairnar </p>
              <p>Email: himanshuk1205@gmail.com</p>
            </div>

            <div className="mt-4 md:mt-8">
              <Link
                to="/getEvent"
                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
              >
                Events
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='flex flex-col items-start  '>
        <span className="inline-flex items-center justify-center rounded-lg bg-emerald-100 px-4 py-2 text-emerald-700 w-24 mx-24 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="-ms-1 me-1.5 size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="whitespace-nowrap text-sm">Your Events</p>
        </span>
        <EventsBlog />
      </div>
    </div>
  );
}
