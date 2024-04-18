import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    // Function to generate a random profile picture URL using Unsplash Source API
    const getRandomProfilePicture = () => {
      const randomSeed = Math.floor(Math.random() * 1000);
      return `https://source.unsplash.com/200x200/?portrait&sig=${randomSeed}`;
    };

    // Function to generate more diverse reviews
    const generateRandomReviews = () => {
      const names = ["Dilshad", "Satya", "Sabir", "Alice", "Bob", "Charlie"];
      const reviews = [
        "I had an amazing experience with the car rental service. The vehicles were in top-notch condition, and the customer service was exceptional. Highly recommend!",
        "Satya here! The car rental service exceeded my expectations. The process was smooth, and the car was clean and well-maintained. Will definitely use it again!",
        "Sabir speaking. Renting a car has never been this easy and convenient. The choices available were fantastic, and the staff was friendly. Five stars!",
        "Alice had a fantastic time with the car rental. The options were great, and the pricing was reasonable. Will recommend to friends!",
        "Bob's experience with the car rental was excellent. The staff was friendly, and the process was quick and efficient. Will use again!",
        "Charlie loved the car rental service. The vehicles were clean and well-maintained, and the staff was helpful. Definitely a five-star experience!",
      ];

      // Shuffle the reviews array to display randomly
      const shuffledReviews = reviews.sort(() => Math.random() - 0.5);

      // Select and set three random reviews
      const newTestimonialData = shuffledReviews.slice(0, 3).map((review, index) => ({
        name: names[index],
        image: getRandomProfilePicture(),
        description: review,
        aosDelay: `${index * 300}`,
      }));

      setTestimonialData(newTestimonialData);
    };

    // Generate diverse reviews on component mount or refresh
    generateRandomReviews();
  }, []); // The empty dependency array ensures that the effect runs only once on component mount

  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Explore the diverse experiences of our customers with our car rental service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((review) => (
              <div
                key={review.name}
                data-aos="fade-up"
                data-aos-delay={review.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src={review.image}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{review.description}</p>
                <p className="text-center font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
