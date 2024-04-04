"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import "./styles.css";

const data = [
  {
    place: "The TimeBox Working",
    title: "Coworking ",
    title2: "& Co-Space",
    description:
      "Coworking spaces in Ghaziabad are increasing in popularity and are becoming a popular choice when it comes to working from home. We at coworklingers have created a platform to list some of the best coworking spaces in India, along with the feature to filter across various aspects such as location, price, amenities, etc.",
    image:
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "The Royals Green",
    title: "Hotels",
    title2: "& Stays",
    description:
      "Escape to a world of luxury and tranquility at Tranquil Haven Hotel & Spa, nestled amidst the breathtaking landscapes of [insert location]. Whether you're seeking a rejuvenating retreat, a romantic getaway, or a memorable family vacation, our hotel offers an unparalleled experience tailored to your every need.",
    image:
      "https://images.unsplash.com/photo-1648852231208-21ce6bd2768b?q=80&w=1540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "Grand Banquetes",
    title: "Banquetes",
    title2: "& Halls",
    description:
      "The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.",
    image:
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "Red Slice Cafe",
    title: "Reasturans",
    title2: "& Cafes",
    description:
      "At Tranquil Haven Hotel & Spa, we understand that every event is unique, and we're dedicated to ensuring that your special occasion is nothing short of perfection. Whether you're planning a lavish wedding reception, a corporate conference, or a milestone celebration, our exquisite banquettes and halls provide the perfect setting for your unforgettable event.",
    image:
      "https://images.unsplash.com/photo-1657349227977-55974c91ddf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "Sagar Ratna",
    title: "Resorts",
    title2: "& Beaches",
    description:
      "Escape to a world of sun, sand, and serenity at Coastal Oasis Resort & Spa, where luxury meets the natural beauty of pristine beaches and azure waters. Nestled along the picturesque coastline of [insert location], our resort offers an idyllic retreat for travelers seeking relaxation, adventure, and unforgettable memories.",
    image:
      "https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "The Inspire School",
    title: "School",
    title2: "& Education",
    description:
      "At Little Explorers Preschool, we believe that every child is a natural-born explorer, eager to discover the wonders of the world around them. Nestled in a nurturing and stimulating environment, our preschool offers a holistic approach to early childhood education, focusing on the development of each child's unique talents, interests, and potential.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJlJTIwc2Nob29sJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    place: "Unisex Saloons",
    title: "Saloons",
    title2: "& Dressing",
    description:
      "Step into a world of relaxation, rejuvenation, and beauty at Serenity Salon & Spa, where pampering meets perfection. Nestled in the heart of [insert location], our salon offers an oasis of tranquility amidst the hustle and bustle of everyday life, providing an array of luxurious services to nourish the body, soothe the soul, and enhance your natural beauty.",
    image:
      "https://plus.unsplash.com/premium_photo-1682090689948-2c8b24f501b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "The Comforts Zone",
    title: "Spa",
    title2: "& Wellness",
    description:
      "Embark on a journey of relaxation, rejuvenation, and renewal at Tranquil Retreat Spa & Wellness Center, where serenity meets sophistication. Nestled in the heart of [insert location], our sanctuary offers a haven of tranquility amidst the hustle and bustle of everyday life, providing an array of holistic therapies and wellness services to nurture your mind, body, and spirit.",
    image:
      "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFNwYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    place: "The South City",
    title: "Amusement",
    title2: "& Parks",
    description:
      "Get ready for a day of thrills, laughter, and unforgettable memories at FunZone Amusement Park, the ultimate destination for family fun and excitement. Located in the heart of [insert location], our park offers a wide range of attractions, rides, and entertainment options for guests of all ages, ensuring a day packed with excitement and adventure for everyone to enjoy.",
    image:
      "https://images.unsplash.com/photo-1502137840985-4ec07e8568bf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    place: "Spiti Valley and Vila",
    title: "Tourism",
    title2: "& Art",
    description:
      "Nestled in the heart of [insert location], Adventure Haven beckons travelers from around the globe with its diverse landscapes, rich cultural heritage, and boundless opportunities for exploration and adventure. Whether you're seeking thrilling outdoor pursuits, immersive cultural experiences, or simply a tranquil escape into nature, Adventure Haven offers something for every type of traveler to discover and enjoy.",
    image:
      "https://images.unsplash.com/photo-1519922639192-e73293ca430e?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const MyComponent = () => {
  useEffect(() => {
    const _ = (id) => document.getElementById(id);
    const cards = data
      .map(
        (i, index) =>
          `<div  class="card" id="card${index}" style="background-image:url(${i.image})"></div>`
      )
      .join("");
         
    const cardContents = data
      .map(
        (i, index) => `<div class="card-content" id="card-content-${index}">
        <div class="content-start"></div>
        <div class="content-place">${i.place}</div>
        <div class="content-title-1">${i.title}</div>
        <div class="content-title-2">${i.title2}</div>
      </div>`
      )
      .join("");

    const slideNumbers = data
      .map(
        (_, index) =>
          `<div class="item" id="slide-item-${index}">${index + 1}</div>`
      )
      .join("");

    _("demo").innerHTML = cards + cardContents;
    _("slide-numbers").innerHTML = slideNumbers;

    function getCard(index) {
      return `#card${index}`;
    }

    function getCardContent(index) {
      return `#card-content-${index}`;
    }

    function getSliderItem(index) {
      return `#slide-item-${index}`;
    }

    function animate(target, duration, properties) {
      return new Promise((resolve) => {
        gsap.to(target, {
          ...properties,
          duration: duration,
          onComplete: resolve,
        });
      });
    }

    let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let detailsEven = true;
    let offsetTop = 200;
    let offsetLeft = 700;
    let cardWidth = 200;
    let cardHeight = 300;
    let gap = 40;
    let numberSize = 50;
    const ease = "sine.inOut";

    function init() {
      const [active, ...rest] = order;
      const detailsActive = detailsEven ? "#details-even" : "#details-odd";
      const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
      const { innerHeight: height, innerWidth: width } = window;
      offsetTop = height - 430;
      offsetLeft = width - 830;

      gsap.set("#pagination", {
        top: offsetTop + 330,
        left: offsetLeft,
        y: 200,
        opacity: 0,
        zIndex: 60,
      });
      gsap.set("nav", { y: -200, opacity: 0 });

      gsap.set(getCard(active), {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      });
      gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
      gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
      gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
      gsap.set(`${detailsInactive} .text`, { y: 100 });
      gsap.set(`${detailsInactive} .title-1`, { y: 100 });
      gsap.set(`${detailsInactive} .title-2`, { y: 100 });
      gsap.set(`${detailsInactive} .desc`, { y: 50 });
      gsap.set(`${detailsInactive} .cta`, { y: 60 });

      gsap.set(".progress-sub-foreground", {
        width: 500 * (1 / order.length) * (active + 1),
      });

      rest.forEach((i, index) => {
        gsap.set(getCard(i), {
          x: offsetLeft + 400 + index * (cardWidth + gap),
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          zIndex: 30,
          borderRadius: 10,
        });
        gsap.set(getCardContent(i), {
          x: offsetLeft + 400 + index * (cardWidth + gap),
          zIndex: 40,
          y: offsetTop + cardHeight - 100,
        });
        gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
      });

      gsap.set(".indicator", { x: -window.innerWidth });

      const startDelay = 0.6;

      gsap.to(".cover", {
        x: width + 400,
        delay: 0.5,
        ease,
        onComplete: () => {
          setTimeout(() => {
            loop();
          }, 500);
        },
      });
      rest.forEach((i, index) => {
        gsap.to(getCard(i), {
          x: offsetLeft + index * (cardWidth + gap),
          zIndex: 30,
          delay: 0.05 * index,
          ease,
          delay: startDelay,
        });
        gsap.to(getCardContent(i), {
          x: offsetLeft + index * (cardWidth + gap),
          zIndex: 40,
          delay: 0.05 * index,
          ease,
          delay: startDelay,
        });
      });
      gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
      gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
      gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
    }

    function step() {
      return new Promise((resolve) => {
        order.push(order.shift());
        detailsEven = !detailsEven;

        const detailsActive = detailsEven ? "#details-even" : "#details-odd";
        const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

        document.querySelector(
          `${detailsActive} .place-box .text`
        ).textContent = data[order[0]].place;
        document.querySelector(`${detailsActive} .title-1`).textContent =
          data[order[0]].title;
        document.querySelector(`${detailsActive} .title-2`).textContent =
          data[order[0]].title2;
        document.querySelector(`${detailsActive} .desc`).textContent =
          data[order[0]].description;

        gsap.set(detailsActive, { zIndex: 22 });
        gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
        gsap.to(`${detailsActive} .text`, {
          y: 0,
          delay: 0.1,
          duration: 0.7,
          ease,
        });
        gsap.to(`${detailsActive} .title-1`, {
          y: 0,
          delay: 0.15,
          duration: 0.7,
          ease,
        });
        gsap.to(`${detailsActive} .title-2`, {
          y: 0,
          delay: 0.15,
          duration: 0.7,
          ease,
        });
        gsap.to(`${detailsActive} .desc`, {
          y: 0,
          delay: 0.3,
          duration: 0.4,
          ease,
        });
        gsap.to(`${detailsActive} .cta`, {
          y: 0,
          delay: 0.35,
          duration: 0.4,
          onComplete: resolve,
          ease,
        });
        gsap.set(detailsInactive, { zIndex: 12 });

        const [active, ...rest] = order;
        const prv = rest[rest.length - 1];

        gsap.set(getCard(prv), { zIndex: 10 });
        gsap.set(getCard(active), { zIndex: 20 });
        gsap.to(getCard(prv), { scale: 1.5, ease });

        gsap.to(getCardContent(active), {
          y: offsetTop + cardHeight - 10,
          opacity: 0,
          duration: 0.3,
          ease,
        });
        gsap.to(getSliderItem(active), { x: 0, ease });
        gsap.to(getSliderItem(prv), { x: -numberSize, ease });
        gsap.to(".progress-sub-foreground", {
          width: 500 * (1 / order.length) * (active + 1),
          ease,
        });

        gsap.to(getCard(active), {
          x: 0,
          y: 0,
          ease,
          width: window.innerWidth,
          height: window.innerHeight,
          borderRadius: 0,
          onComplete: () => {
            const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
            gsap.set(getCard(prv), {
              x: xNew,
              y: offsetTop,
              width: cardWidth,
              height: cardHeight,
              zIndex: 30,
              borderRadius: 10,
              scale: 1,
            });

            gsap.set(getCardContent(prv), {
              x: xNew,
              y: offsetTop + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
            });
            gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

            gsap.set(detailsInactive, { opacity: 0 });
            gsap.set(`${detailsInactive} .text`, { y: 100 });
            gsap.set(`${detailsInactive} .title-1`, { y: 100 });
            gsap.set(`${detailsInactive} .title-2`, { y: 100 });
            gsap.set(`${detailsInactive} .desc`, { y: 50 });
            gsap.set(`${detailsInactive} .cta`, { y: 60 });
          },
        });

        rest.forEach((i, index) => {
          if (i !== prv) {
            const xNew = offsetLeft + index * (cardWidth + gap);
            gsap.set(getCard(i), { zIndex: 30 });
            gsap.to(getCard(i), {
              x: xNew,
              y: offsetTop,
              width: cardWidth,
              height: cardHeight,
              ease,
              delay: 0.1 * (index + 1),
            });

            gsap.to(getCardContent(i), {
              x: xNew,
              y: offsetTop + cardHeight - 100,
              opacity: 1,
              zIndex: 40,
              ease,
              delay: 0.1 * (index + 1),
            });
            gsap.to(getSliderItem(i), {
              x: (index + 1) * numberSize,
              ease,
            });
          }
        });
      });
    }

    async function loop() {
      await animate(".indicator", 2, { x: 0 });
      await animate(".indicator", 0.8, {
        x: window.innerWidth,
        delay: 0.3,
      });
      gsap.set(".indicator", { x: -window.innerWidth });
      await step();
      loop();
    }

    async function loadImage(src) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    }

    async function loadImages() {
      const promises = data.map(({ image }) => loadImage(image));
      return Promise.all(promises);
    }

    async function start() {
      try {
        await loadImages();
        init();
      } catch (error) {
        console.error("One or more images failed to load", error);
      }
    }

    start();

    return () => {};
  }, []);

  return (
    <div class="main">
      <div class="indicator"></div>
      <div id="demo"></div>
      <div class="details" id="details-even">
        <div class="place-box">
          <div class="text">The TimeBox Coworking</div>
        </div>
        <div class="title-box-1">
          <div class="title-1">Coworking</div>
        </div>
        <div class="title-box-2">
          <div class="title-2">& Co-Space</div>
        </div>
        <div class="desc">
          Coworking spaces in Ghaziabad are increasing in popularity and are
          becoming a popular choice when it comes to working from home. We at
          coworklingers have created a platform to list some of the best
          coworking spaces in India, along with the feature to filter across
          various aspects such as location, price, amenities, etc.
        </div>
      </div>
      <div class="details" id="details-odd">
        <div class="place-box">
          <div class="text">The TimeBox Coworking</div>
        </div>
        <div class="title-box-1">
          <div class="title-1">Coworking</div>
        </div>
        <div class="title-box-2">
          <div class="title-2">& Co-Space</div>
        </div>
        <div class="desc">
          Coworking spaces in Ghaziabad are increasing in popularity and are
          becoming a popular choice when it comes to working from home. We at
          coworklingers have created a platform to list some of the best
          coworking spaces in India, along with the feature to filter across
          various aspects such as location, price, amenities, etc.
        </div>
      </div>

      <div class="pagination" id="pagination">
        <div class="progress-sub-container">
          <div class="progress-sub-background">
            <div class="progress-sub-foreground"></div>
          </div>
        </div>
        <div class="slide-numbers" id="slide-numbers"></div>
      </div>
      <div class="cover"></div>
    </div>
  );
};

export default MyComponent;
