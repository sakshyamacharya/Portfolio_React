import React, { useState } from "react";
import card from "../images/card.png";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card4.png";
import card4 from "../images/card5.png";
import card5 from "../images/card6.png";

function Testimonial() {
  const [filter, setFilter] = useState(""); // State for the filter

  // Testimonial data
  const testimonials = [
    { id: 1, img: card, starRating: 5 },
    { id: 5, img: card1, starRating: 5 },
    { id: 2, img: card2, starRating: 5 },
    { id: 3, img: card3, starRating: 4 },
    { id: 6, img: card4, starRating: 4 },
    { id: 4, img: card5, starRating: 4 },
  ];

  // Filter testimonials based on the filter value
  const filteredTestimonials = testimonials.filter((testimonial) =>
    filter === "" ? true : testimonial.starRating.toString() === filter
  );

  return (
    <div className="w-full">
      <div className="p-3">
        <div className="text-center my-[30px]">
          <h1 className="text-[30px] m-1 mbl:text-[18px]">Clients Testimonials</h1>
          <hr className="w-40 border border-black mx-auto" />
        </div>
        <div className="mb-6 w-[85%] flex items-center justify-end ">
          <h2 className="text-[20px] mbl:text-[15px]">Filter</h2>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded ml-2 mbl:text-[15px]"
          >
            <option value="" className="mbl:text-[12px]">All Ratings</option>
            <option value="4" className="mbl:text-[12px]">4 Stars</option>
            <option value="5" className="mbl:text-[12px]">5 Stars</option>
          </select>
        </div>
        <div className="w-full  flex flex-col justify-center items-center">
          <div className="w-[70%] grid grid-cols-3 gap-10 rounded-[10px] mbl:w-[80%] mbl:gap-4">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex w-full items-center justify-between"
              >
                <img src={testimonial.img} className="mbl:w-[320px]" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
