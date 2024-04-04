import React from "react";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="bg-white  border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://www.letzstepin.com/logo13.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              {/* <span className="self-center hover:underline hover:text-cyan font-serif mt-1 text-xl font-semibold whitespace-nowrap dark:text-white">
                LetzStepIn
              </span> */}
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:bg-cyan focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:hover:bg-cyan-500 focus:outline-none dark:focus:ring-gray-800"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-white bg-cyan hover:bg-white focus:ring-4 focus:ring-gray-300 font-medium rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2 mr-2 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Sign In
              </a>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 lg:p-0 dark:text-white lg:dark:hover:text-cyan hover:underline hover:text-cyan"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 lg:p-0 dark:text-white lg:dark:hover:text-cyan-400 hover:underline hover:text-cyan"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 lg:p-0 dark:text-white lg:dark:hover:text-cyan-400 hover:underline hover:text-cyan"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 lg:p-0 dark:text-white lg:dark:hover:text-cyan-400 hover:underline hover:text-cyan"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 lg:p-0 dark:text-white lg:dark:hover:text-cyan-400 hover:underline hover:text-cyan"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 lg:p-0 dark:text-white lg:dark:hover:text-cyan-400 hover:underline hover:text-cyan"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div class="border-t -mt-2 border-cyan"></div>
    </div>
  );
};

export default Header;
