import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt="Car Rental Image"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-bold font-serif text-purple-600"
              >
                Experience Luxury Car Rentals
              </h1>
              <p data-aos="fade-up" className="text-lg leading-8 tracking-wide text-gray-700">
                Discover a world of comfort and style with our premium fleet of
                luxury cars. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, magnam! Tenetur odio quo et maxime?
              </p>
              <p data-aos="fade-up" className="text-lg text-gray-700">
                Whether you're traveling for business or leisure, our top-notch
                vehicles ensure a smooth and unforgettable journey. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, tempora.
              </p>
              <button data-aos="fade-up" className="button-outline text-xl">
                Explore Our Fleet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
