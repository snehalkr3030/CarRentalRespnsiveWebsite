import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
    km: 15,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
    km: 12,
  },
  {
    name: "Audi A3",
    price: 120,
    image: car3,
    aosDelay: "1000",
    km: 18,
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Explore Our Fleet
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Discover the perfect ride for your journey. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Dolor iure nemo ab?
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="relative group overflow-hidden rounded-xl bg-white border-2 border-gray-300 hover:border-primary transition duration-300 transform hover:shadow-2xl"
              >
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-[200px] object-cover transition duration-700 transform scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#" className="text-blue-500 hover:underline">
                      Details
                    </a>
                  </div>
                  <p className="text-lg font-semibold absolute top-0 left-0 bg-primary text-white p-2 rounded-br-lg">
                    {data.km} Km
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline text-xl">
            Rent a Car Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
