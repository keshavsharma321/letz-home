import React from "react";
import PropTypes from "prop-types";

const products = [
  {
    img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Coworking & Co-Space",
  },
  {
    img: "https://images.unsplash.com/photo-1648852231208-21ce6bd2768b?q=80&w=1540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Hotels & Stays",
  },
  {
    img: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Banquetes & Halls",
  },
  {
    img: "https://images.unsplash.com/photo-1657349227977-55974c91ddf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reasturants & Cafes",
  },
  {
    img: "https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Resorts & Beaches",
  },
  {
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJlJTIwc2Nob29sJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    title: "Education And School",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682090689948-2c8b24f501b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Saloons & Dressing",
  },
  {
    img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFNwYXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Spa And Wellness",
  },
  {
    img: "https://images.unsplash.com/photo-1502137840985-4ec07e8568bf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Amusement And Parks",
  },
  {
    img: "https://images.unsplash.com/photo-1519922639192-e73293ca430e?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tourism And Art",
  },
  {
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Dentals And Clinics",
  },
  {
    img: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFrZXJ5fGVufDB8fDB8fHww",
    title: "Bakeries And Slices",
  },
];

const ProductItem = ({ product }) => {
  return (
    <a href="#!">
      <div className="flex flex-col items-center justify-center">
        <div className="w-44 h-44 flex justify-center items-center">
          <img
            src={product.img}
            className="rounded-full max-w-full h-44 w-auto"
            alt="..."
          />
        </div>
        <div className="p-4 md:p-6">
          <h2 className="text-lg font-bold leading-none my-2">
            {product.title}
          </h2>
        </div>
      </div>
    </a>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

const Epcategory3 = () => {
  return (
    <section className="ezy__epcategory3 light py-14 md:py-24 bg-white  text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center items-center text-center md:text-start">
          <h2 className="text-2xl leading-none md:text-[40px] font-bold mb-4 ml-3">
            Everything You Need !!
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 text-center mt-6 md:mt-12F">
          {products.map((product, i) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2"
              key={i}
            >
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Epcategory3;
