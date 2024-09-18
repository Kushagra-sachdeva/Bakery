import React from "react";
import Item1 from "./Bakery.png"
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Item1,
    title: "Welcome to Sweet Treats Bakery!",
    description:
      "At Sweet Treats Bakery, we believe in the magic of baking and the joy of sharing delicious, handcrafted pastries with our community."
  },
  {
    id: 2,
    img: Item1,
    title: "Our Mission",
    description:
      "Our mission is to create unforgettable moments through our baked goods. Whether you’re celebrating a special occasion or just enjoying a sweet treat, we strive to make every experience memorable. We are dedicated to maintaining the highest standards of quality and customer satisfaction.",
  },
  {
    id: 3,
    img: Item1,
    title: "Our History",
    description:
      "Sweet Treats Bakery was founded in 2000 by Kushagra with a dream to bring the warmth and joy of homemade baked goods to our community. What began as a small kitchen experiment soon turned into a thriving business, driven by our passion for baking and commitment to quality."
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">

      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
 
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
               
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                   <a href="https://bakery6705.blogspot.com/2024/09/sweet-treats-bakery.html" class="inline-block bg-orange-500 text-white text-center py-2 px-4 rounded-lg hover:bg-orange-600">
                   <span>Learn More</span>
                  </a>
                  </div>
                </div>
      
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
