import React from "react";

const CallToAction8 = () => {
  return (
    <section className="ezy__cta8 light ml-10 text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="bg-[#eff4fd] dark:bg-[#60c5be] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 bg-black bg-opacity-10 text-center p-4">
              <img
                src="https://cdn.easyfrontend.com/pictures/cta/cta_8.png"
                alt=""
                className="max-w-full h-96 ml-32 mt-2"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center h-full py-12 px-6 sm:px-12">
                <div>
                  <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-8">
                    Join the waiting list ...
                  </h2>
                  <p className="text-lg opacity-80 mb-12 lg:mr-12">
                    Bring your imaginative world to vivid virtual life. Embark
                    on virtual opulence with India's foremost 360° tour & CGI
                    expert, revitalizing your digital experience.
                  </p>

                  <div>
                    <button className="px-7 py-3 min-w-[110px] bg-transparent border border-blue-600 hover:text-white hover:bg-blue-600 hover:border-opacity-90 transition mb-3 lg:mb-0 lg:mr-2">
                      Learn More
                    </button>
                    <button className="px-7 py-3 min-w-[110px] bg-blue-600 border border-blue-600 text-white hover:text-white hover:bg-opacity-90 hover:border-opacity-90 transition">
                      Quote Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction8;
