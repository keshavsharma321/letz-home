// import React from "react";

// const SubscribeForm = () => (
//   <form className="mt-6">
//     <div className="relative flex flex-wrap items-stretch w-full rounded shadow overflow-hidden">
//       <input
//         name="email"
//         className="px-5 py-4 grow placeholder:text-lg border-0"
//         type="email"
//         placeholder="Enter email"
//         required
//       />
//       <button className="bg-blue-600 hover:bg-opacity-90 text-white border border-blue-600 py-3 rounded transition text-lg font-semibold px-12">
//         Send
//       </button>
//     </div>
//   </form>
// );

// const ComingSoon2 = () => {
//   return (
//     <section className="ezy__comingsoon2 light bg-white  text-zinc-900 dark:text-white flex flex-col justify-between p-0 overflow-hidden ">
//       <div className="container px-4 flex grow items-center h-full">
//         <div className="grid grid-cols-12 justify-center">
//           <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center py-12">
//             <h2 className="font-bold text-[32px] leading-none md:text-[45px] mb-6">
//               Coming Soon
//             </h2>
//             <p className="text-lg opacity-80 mb-2">
//               An activity that requires a person's mental or physical effort is
//               work.If a person is trained for a certain type of job, they may
//               have a profession. Typically, a job would be a subset of someone's
//               career.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* <div
//         className="py-24 px-10 flex items-center min-h-[40vh] bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url(https://cdn.easyfrontend.com/pictures/comingsoon/two.png)",
//         }}
//       >
//         <div className="container px-4">
//           <div className="grid grid-cols-12 justify-center">
//             <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-4 xl:col-start-5">
//               <SubscribeForm />
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </section>
//   );
// };

// export default ComingSoon2;
"use client";
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
  [
    {
      photo:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Akshay Kumar",
      rating: 3.5,
      content:
        "The quality of the 360° views produced by Ataggin is nothing short of exceptional. Each panoramic shot was crisp, clear, and provided an immersive experience that allowed me to virtually explore every corner of the space.",
    },
    {
      photo:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "Arjun Kapur",
      rating: 4.5,
      content:
        "The quality of the 360° views produced by Ataggin is nothing short of exceptional. Each panoramic shot was crisp, clear, and provided an immersive experience that allowed me to virtually explore every corner of the space.",
    },
  ],
  [
    {
      photo:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Raima Sen",
      rating: 5,
      content:
        "The quality of the 360° views produced by Ataggin is nothing short of exceptional. Each panoramic shot was crisp, clear, and provided an immersive experience that allowed me to virtually explore every corner of the space.",
    },
    {
      photo:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "Akshay Kumar",
      rating: 3.5,
      content:
        "The quality of the 360° views produced by Ataggin is nothing short of exceptional. Each panoramic shot was crisp, clear, and provided an immersive experience that allowed me to virtually explore every corner of the space.",
    },
  ],
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("flex flex-wrap gap-0.5", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = (
            <FontAwesomeIcon icon={faStar} className="text-[22px] text-cyan" />
          );
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              className="text-[22px] text-cyan"
            />
          );
        else if (index > rating)
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-[22px] text-cyan dark:text-opacity-20"
            />
          );

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const TestimonialItem = ({ item }) => {
  const { rating, content, photo, name } = item;
  return (
    <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
      <div className="mt-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="mr-2">
              <img
                src={photo}
                alt={name}
                className="max-w-full h-auto rounded-full border border-cyan"
                width="47"
              />
            </div>
            <div>
              <h5 className="text-xl break-all font-medium">{name}</h5>
            </div>
          </div>
          <Rating rating={rating} showLabel={false} />
        </div>
        <p className="leading-[1.8] opacity-80 mb-6">{content}</p>
      </div>
    </div>
  );
};
TestimonialItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Testimonial21 = () => {
  const [index, setIndex] = useState(0);

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };
  return (
    <section className="ezy__testimonial21 light py-14 md:py-24 bg-white text-zinc-900 dark:text-white lg:-mt-24 ">
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-center text-center mb-6 lg:mb-12">
          <div className="max-w-lg">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg opacity-80">
              Our clients praise us for our great results, personable service,
              expert knowledge and on-time delivery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-12">
          {testimonialList[index].map((item, i) => (
            <div className="col-span-2 md:col-span-1" key={i}>
              <TestimonialItem item={item} />
            </div>
          ))}
        </div>

        <div className="relative flex justify-center items-center my-12">
          <button
            className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4"
            onClick={() => handleControl("prev")}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className="text-lg bg-white shadow-2xl dark:bg-slate-800 opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
            onClick={() => handleControl("next")}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial21;
