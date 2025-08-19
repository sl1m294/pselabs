import React, { useContext } from "react";
//image
import HeroImg from "../img/home/woman1.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import { transition1 } from "../transitions";
import { cubicBezier } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const customEase = cubicBezier(0.6, 0.01, -0.05, 0.9);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: customEase }}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ duration: 1.4, ease: customEase }}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 md:pt-20 md:pb-8 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="text-[54px] md:text-[72px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2">
              photographer <br /> & film maker
            </h1>

            <p className="text-[26px] md:text-[30px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              London, ON
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              lets connect
            </Link>
          </motion.div>
          {/* image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1.4, ease: customEase }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={HeroImg}
                alt="hero image"
                transition={{ duration: 1.4, ease: customEase }}
                className="w-[400px] md:w-[600px] lg:w-[800px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
