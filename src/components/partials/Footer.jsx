import { BsGithub } from "react-icons/bs"; 
import { FaEnvelope } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import React from "react";
import ContactIconLinks from "../pages/home/ContactIconLinks";

const Footer = () => {
  return (
    <>
      <footer className="footer ">
        <div className="container">
          <div>
            <ContactIconLinks/>
            <p>Brgy II-D, San Pablo City, Laguna, 4000</p>
          </div>
          <div>
            <span>&copy; Ron Kua | 2024</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
