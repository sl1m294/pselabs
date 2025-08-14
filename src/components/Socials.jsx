import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYoutube,
  FaX,
} from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
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
          <a href="https://www.instagram.com/pselabs/" target="_blank">
            <FaX />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pselabs/" target="_blank">
            <FaPinterest />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/pselabs/" target="_blank">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
