import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Item1 from "./Item1.png";
import Item2 from "./Item2.png";
import Item3 from "./Item3.png";
import Item4 from "./Item4.png";
import Item5 from "./Item5.png";
import Item6 from "./Item6.png";
import Latest from "../Latest/Latest"; 

const OurItems = [
  { id: 1, img: Item1, title: "Blueberry Pastry", rating: "4.5", price: "₹120" },
  { id: 2, img: Item2, title: "Pineapple Pastry", rating: "4.0", price: "₹110" },
  { id: 3, img: Item3, title: "Swiss Roll", rating: "4.8", price: "₹150" },
  { id: 4, img: Item4, title: "Cinnamon Roll", rating: "4.2", price: "₹130" },
  { id: 5, img: Item5, title: "Chocolate Pastry", rating: "3.9", price: "₹140" },
  { id: 6, img: Item6, title: "Mango Pastry", rating: "4.2", price: "₹125" },
];

const Items = () => {
  return (
    <div>
      <div className="mt-14 mb-12">
        <div className="container">
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 className="text-3xl font-bold">MENU</h1>
            <p className="text-gray-600">Check out our best items.</p>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {OurItems.map((item) => (
                <div
                  data-aos="fade-up"
                  key={item.id}
                  className="space-y-3"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{item.rating}</span>
                      <br/>
                      <span>{item.price}</span>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Link to="/latest" className="text-primary font-bold">View Our Latest Products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;