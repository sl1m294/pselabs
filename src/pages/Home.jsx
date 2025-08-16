import React from "react";
//image
import HeroImg from "../img/home/woman1.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-[54px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2">
              photographer <br /> & film maker
            </h1>

            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              London, ON
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              lets connect
            </Link>
          </div>
          {/* image */}
          <div className="flex justify-center lg:justify-end">
            <div>
              <img
                src={HeroImg}
                alt="hero image"
                className="w-[400px] lg:w-[800px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
