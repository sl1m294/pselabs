import React, { useContext } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYoutube,
  FaX,
} from "react-icons/fa6";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.instagram.com/pselabs/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61566487186769"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank">
            <FaX />
          </a>
        </li>
        <li>
          <a href="https://pin.it/7bPUH0Wz3" target="_blank">
            <FaPinterest />
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/@PSELab5" target="_blank">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
