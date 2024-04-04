import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font ">
        <div class="border-t  border-cyan"></div>
        <div class="container mt-4 mx-auto">
          <div class="flex mt-8 flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full ">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-md mb-3">
                LetzStepIn Map
              </h2>
              <nav class="list-none ">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li className="mt-2">
                  <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
                <li className="mt-2">
                  <a class="text-gray-600 hover:text-gray-800">
                    Sale In letzStepIn
                  </a>
                </li>
                <li className="mt-2">
                  <a class="text-gray-600 hover:text-gray-800">
                    Career Opportunities
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-md mb-3">
                Customer Products
              </h2>
              <nav class="list-none ">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    Common Questions
                  </a>
                </li>
                <li className="mt-2">
                  <a class="text-gray-600 hover:text-gray-800">
                    Return Procedures
                  </a>
                </li>
                <li className="mt-2">
                  <a class="text-gray-600 hover:text-gray-800">Privacy</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-md mb-3">
                Customer Guide
              </h2>
              <nav class="list-none ">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">
                    How To Place An Order?
                  </a>
                </li>
                <li className="mt-2">
                  <a class="text-gray-600 hover:text-gray-800">
                    Order Submission Procedure
                  </a>
                </li>
                <li className="mt-2">
                  <a class="text-gray-600 hover:text-gray-800">
                    Payment Methods
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    for="footer-field"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Be With Us!
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder="Enter Your Email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-cyan border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Register
                </button>
              </div>
              <p class="text-gray-500 text-sm mt-2 md:text-left text-center">
                Stay up to date with the latest discounts by emailing us
              </p>
            </div>
          </div>
        </div>
        <div class="bg-gray-100  ">
          <div class="border-t mt-8 border-cyan"></div>
          <div class=" px-5 mt-4  mb-4 flex items-center w-full justify-evenly sm:flex-row flex-col">
            <div>
              {" "}
              <a href="https://flowbite.com" className="flex items-center">
                <img
                  src="https://www.letzstepin.com/logo13.png"
                  className="mr-3 h-6 sm:h-9"
                  alt="Flowbite Logo"
                />
                <span className="self-center hover:underline hover:text-cyan font-serif mt-1 text-xl font-semibold whitespace-nowrap dark:text-white">
                  LetzStepIn
                </span>
              </a>
            </div>
            <div>
              <p class="text-md flex  text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                © 2024 LetzStepIn. All rights reserved - Designed and Developed
                with
                <img
                  className="h-4 w-4 mt-1 ml-1 mr-1"
                  src="https://cdn-icons-png.flaticon.com/128/594/594847.png"
                ></img>
                by Keshav Sharma
              </p>
            </div>
            <div>
              {" "}
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a class="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
