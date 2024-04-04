import React from "react";
import PropTypes from "prop-types";
import {
  faCannabis,
  faRandom,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const serviceList = [
  {
    color: "red",
    icon: faCannabis,
    title: "360° Digital Staging",
    description:
      "Step into the pinnacle of refinement and sophistication with LetzStepIn's exquisite 360° Digital Staging Service . ",
  },
  {
    color: "blue",
    icon: faRandom,
    title: "Digital Full 360° CGI VR Tour",
    description:
      " Seamlessly blending non-existent spaces, we create a mesmerizingly authentic experience, ensuring unparalleled allure and satisfaction for your clients..",
  },
  {
    color: "yellow",
    icon: faCamera,
    title: "Luxury Virtual Staging: 2D Photo",
    description:
      "    Revolutionize spaces with our digital staging and renovation! From 2D photos to immersive 360° views, we breathe life into under-renovation spaces.      ",
  },
  {
    color: "blue",
    icon: faCamera,
    title: "Premium Staging: 2D Photo",
    description:
      "    Revolutionize spaces with our digital staging and renovation! From 2D photos to immersive 360° views, we breathe life into under-renovation spaces.      ",
  },
  {
    color: "yellow",
    icon: faRandom,
    title: "Standard Digital Staging: 2D Photo",
    description:
      "    Revolutionize spaces with our digital staging and renovation! From 2D photos to immersive 360° views, we breathe life into under-renovation spaces.      ",
  },
  {
    color: "red",
    icon: faCannabis,
    title: "360° Digital Renovation",
    description:
      "Unveiling '360° Digital Transformation,' our exclusive service elevates interiors by digitally rejuvenating walls, floors, and ceilings .",
  },
];

const ServiceItem = ({ service }) => (
  <div className=" p-4 xl:p-6 -mt-4">
    <div className="mr-4">
      <span
        className={`w-[60px] h-[60px] rounded-full text-3xl inline-flex justify-center items-center bg-cyan text-white mb-6`}
      >
        <FontAwesomeIcon icon={service.icon} />
      </span>
    </div>
    <div>
      <h4 className="text-2xl font-medium mb-4">{service.title}</h4>
      <p className="opacity-80">{service.description}</p>
    </div>
  </div>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

const Service7 = () => {
  return (
    <section className="ezy__service7 py-14 md:py-24 bg-white  text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center mb-6 sm:mb-12">
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg opacity-80 mb-6">
              LetzStepIn pioneers the art of transforming visionary concepts
              into immersive vivid realities accessible to all—anytime,
              everywhere.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6">
          {serviceList.map((service, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service7;
