import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const ContactIconLinks = ({ children }) => {
  return (
    <>
      <ul className="flex items-center gap-3">
        {children}
        <li>
          <Link
            to={"#"}
            target="_blank"
            className="tooltip"
            data-tooltip="Shoot Me an Email"
          >
            <FaEnvelope />
          </Link>
        </li>
        <li>
          <Link
            to={"#"}
            className="tooltip"
            data-tooltip="See My GitHub Projects"
          >
            <BsGithub />
          </Link>
        </li>
        <li>
          <Link
            to={"#"}
            target="_blank"
            className="tooltip"
            data-tooltip="Contact Me on Facebook"
          >
            <BsFacebook />
          </Link>
        </li>
        <li>
          <Link
            to={"#"}
            target="_blank"
            className="tooltip"
            data-tooltip="Contact Me on Messenger"
          >
            <BsMessenger />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ContactIconLinks;
