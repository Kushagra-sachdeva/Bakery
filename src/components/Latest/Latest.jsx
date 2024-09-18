import React from "react";
import Slider from "react-slick";
import croissant from "./croissant.webp";
import Khari from "./khari.webp";
import breadBun from "./bread-bun.jpg";

const LatestP = [
  {
    id: 1,
    title: "Croissant",
    img: croissant,
    link: ""
  },
  {
    id: 2,
    title: "Khari",
    img: Khari,
    link: ""
  },
  {
    id: 3,
    title: "Bread Bun",
    img: breadBun,
    link : ""
  },
];

const Latest = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Our Latest Products
          </h1>
        </div>

        <div data-aos="zoom-in">
          <Slider {...settings}>
            {LatestP.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="rounded w-full h-40 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <h2 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Latest;