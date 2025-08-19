import React, { useContext } from "react";
import AboutImg from "../img/about/about.JPG";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { CursorContext } from "../context/CursorContext";

import { cubicBezier } from "framer-motion";

const About = () => {
  const customEase = cubicBezier(0.6, 0.01, -0.05, 0.9);

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 1.4, ease: customEase }}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        {/* text & Image */}
        <div className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={AboutImg} alt="woman2" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ duration: 1.4, ease: customEase }}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start "
          >
            <h1 className="h1">About Me</h1>
            <p className="mb-12 max-w-sm">
              I’m a passionate photographer and filmmaker based in London,
              Ontario, dedicated to capturing authentic moments and telling
              compelling stories through visuals. With a keen eye for detail and
              a love for creativity, I specialize in portrait, lifestyle, and
              cinematic photography, blending artistry with technical precision.{" "}
              <br />
            </p>

            <Link to={"/portfolio"} className="btn">
              view my work{" "}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

// <div className="container mx-auto h-full relative">
//   {/* Text and Image Wrapper */}
//   <div className="flex flex-col justify-center">
//     {/* Text */}
//     <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:pl-10 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
//       <h1 className="h1">
//         photographer <br /> & film maker
//       </h1>
//       <p className="text-[26px] ">London, ON</p>
//       <Link to={"/contact"} className="btn mb-[30px]">
//         lets talk
//       </Link>
//     </div>
//     {/* Image */}
//     <div className="flex justify-end max-h-96 lg:max-h-max">
//       <div className="relative lg:-right-40 overflow-hidden">
//         <img src={HeroImg} alt="hero_image" />
//       </div>
//     </div>
//   </div>
// </div>;
