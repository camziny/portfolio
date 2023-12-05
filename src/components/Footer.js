import React from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  GitHub,
  Email,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white p-6">
      <div className="socialMedia flex justify-center space-x-4 mb-4">
        <a
          className="hover:text-blue-500 transition"
          href="https://www.linkedin.com/in/cameron-ziny/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          className="hover:text-gray-400 transition"
          href="https://github.com/camziny"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          className="hover:text-red-500 transition"
          href="mailto:cameronziny@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email />
        </a>
        <a
          className="hover:text-pink-500 transition"
          href="https://www.instagram.com/zamciny/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          className="hover:text-blue-600 transition"
          href="https://www.facebook.com/cziny/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
      </div>
      <p className="text-center"> &copy; 2022 camziny.com</p>
    </div>
  );
};

export default Footer;
