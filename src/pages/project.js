import React from "react";
import humtto from "../images/humtto 1.png";
import wordPress from "../images/wordpress-589121_1280 1.png";

function Project() {
  return (
    <div
      className="p-3 flex flex-col w-full justify-center items-center"
      id="project"
    >
      <div className="text-center my-[30px]">
        <h1 className="text-[30px] m-1 mbl:text-[22px]">Projects</h1>
        <hr className="w-20 font-bold h-[10] border border-black mx-auto" />
      </div>
      <div className="w-[70%] rounded-[10px] mbl:w-[85%]">
        {/* First Card */}

        <div className="flex w-full items-center justify-between rounded-[30px] bg-[#FFF3DE] mbl:block">
          <div className="w-1/2 px-20 flex flex-col gap-10 mbl:w-full mbl:p-6 mbl:gap-4">
            <h1 className="font-bold text-[40px] mbl:text-[18px]">Humtto</h1>
            <div>
              <p className="text-[18px] text-justify opacity-[80%] mbl:text-[16px] ">
              Capturing the essence of adventure with Humtto Outdoor Product was a thrilling experience.
               This partnership not only highlights the quality and style of Humtto's products but also
                the spirit of exploration they express.
                <br/>
                <br/>
                Grateful for the opportunity to collaborate with Humtto Outdoor Products through TWB 
                Creatives Marketing Agency, I consider myself fortunate to have played a pivotal role 
                in showcasing their exceptional outdoor shoes and clothing.
              </p>
              <button
                className="my-3 inline-block px-4 py-2 text-white bg-[#D2B687] rounded-lg shadow-md focus:ring-opacity-50 font-bold"
                id="btn"
              >
                <a href="https://humttonepal.com/">View Project</a>
              </button>
            </div>
          </div>
          <div className="w-[40%] overflow-hidden mbl:w-[100%] ">
            <img
              src={humtto}
              alt=""
              className="w-full h-full mbl:rounded-[16px] object-cover"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full my-12 p-12 rounded-[30px] bg-[#FFF3DE]  mbl:p-4 mbl:gap-4">
          <h1 className="font-bold text-[40px] mbl:text-[18px] mbl:my-3">
            Smart School Bus Monitoring System
          </h1>
          <p className="text-[18px] text-justify opacity-[80%]">
            In collaboration with my talented group members – Solomon Silwal,
            Pramod Giri, Aryan Malla, and Bibek Sapkota – we successfully
            conceptualized and executed Smart School Bus Monitoring System as
            part of our Innovation Project course. Our innovative solution aimed
            to enhance the safety and efficiency of school transportation by
            incorporating advanced technology.
          </p>
          <button
            className="my-3 inline-block px-4 py-2 text-white bg-[#D2B687] rounded-lg shadow-md  focus:ring-opacity-50 font-bold"
            id="btn"
          >
            View Project
          </button>
        </div>

        {/* Third Card */}

        <div className="flex w-full items-center justify-between rounded-[30px] bg-[#FFF3DE] mbl:block">
          <div className="w-1/2 px-20 flex flex-col gap-10 mbl:w-full mbl:p-6 mbl:gap-4">
            <h1 className="font-bold text-[40px] mbl:text-[20px]">
              WP Consultancy Project
            </h1>
            <div>
              <p className="text-[18px] text-justify opacity-[80%] mbl:text-[16px] ">
                Presenting Education Tree Global, my WordPress frontend project.
                Explore my WordPress development in action.
              </p>
              <button
                className="my-3 inline-block px-4 py-2 text-white bg-[#D2B687] rounded-lg shadow-md focus:ring-opacity-50 font-bold"
                id="btn"
              >
                <a href="https://educationtreeglobal.com/">View Project</a>
              </button>
            </div>
          </div>
          <div className="w-[40%] overflow-hidden mbl:w-[100%] border">
            <img
              src={wordPress}
              alt=""
              className="w-full h-full mbl:rounded-[16px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
