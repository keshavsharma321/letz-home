import React from "react";

const AboutUs13 = () => {
  return (
    <section className="ezy__about13 light ml-8 py-20 md:py-28 md:-mt-28 bg-white  text-zinc-900 dark:text-white relative">
      <div className="container px-4 ">
        <div className="grid grid-cols-12 h-96 gap-5  items-center  justify-evenly">
          <div className="col-span-12 lg:col-span-6">
            <div className="lg:px-7 ">
              <h1 className="uppercase text-4xl md:text-6xl leading-tight font-medium mb-2">
                ABOUT US
              </h1>
              <hr className="w-32 h-1 bg-black dark:bg-cyan opacity-100 my-6" />
              <p className="text-lg leading-normal opacity-75 my-2">
                LetzStepIn pioneers the art of transforming visionary concepts
                into immersive vivid realities accessible to all—anytime,
                everywhere. Leveraging cutting-edge technology, our expertise
                encompasses virtual staging, renovation, and crafting of fully
                immersive 360° CGI show homes and properties.
              </p>
              <p className="text-lg leading-normal opacity-75">
                Our commitment is to deliver hyper-realistic visual experiences,
                inviting everyone to seamlessly step into non-existing spaces
                with unparalleled realism. Explore the forefront of
                visualization, where our perfect of blend of 360° and 3D
                technologies reveals possibilities of an inspiring future long
                before a single foundation stone is laid.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="w-[38vw] absolute top-0 right-0 bottom-0 float-left bg-blue-600 bg-opacity-30" />
            <div className="relative flex justify-center lg:flex-col lg:pl-20">
              <img
                src="/images/Letz.png"
                alt=""
                className="hidden  md:block  w-80 h-60  lg:w-[400px] lg:h-80 object-cover mt-16 lg:mt-8 ml-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs13;
