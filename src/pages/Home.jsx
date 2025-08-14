import React from "react";
//image
import HeroImg from "../img/home/woman6.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* Text and Image Wrapper */}
        <div className="flex flex-col justify-center">
          {/* Text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:pl-10 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              photographer <br /> & film maker
            </h1>
            <p className="text-[26px] ">London, ON</p>
            <Link to={"/contact"} className="btn mb-[30px]">
              lets talk
            </Link>
          </div>
          {/* Image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow-hidden">
              <img src={HeroImg} alt="hero_image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
