import React from "react";
// image import
import Woman1 from "../img/contact/woman6.png";
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion";

const Contact = () => {
  const customEase = cubicBezier(0.6, 0.01, -0.05, 0.9);

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 1.4, ease: customEase }}
      className="bg-white min-h-screen overflow-hidden"
    >
      <div className="container mx-auto h-full ">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/* background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: customEase }}
            className="hidden lg:flex bg-red-500 absolute bottom-0 right-0 top-72 -z-10"
          ></motion.div>
          {/* text and form */}
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="text-[54px] md:text-[72px] lg:text-[108px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em] mb-2">
              Contact me
            </h1>
            <p className="mb-12">I'd love to hear from you</p>
            <form action="" className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your Email"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Message"
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start mt-5">
                Send
              </button>
            </form>
          </div>
          {/* image */}
          <div className="sm:-mt-25 md:-mt-10 lg:-mt-47">
            <img src={Woman1} alt="photo of woman" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
