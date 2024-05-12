import React from "react";
import { Link } from "react-router-dom";
import { InputText, InputTextArea } from "../../helpers/FormInputs";
import { Form, Formik } from "formik";
import { object, string, number } from "yup";
import { BsPersonFill } from "react-icons/bs";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { FaEnvelope } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const SectionContact = () => {
  // FORM STUFF
  const initVal = {
    contact_name: "",
    contact_email: "",
    contact_subject: "",
    contact_message: "",
  };
  const yupSchema = object({
    contact_name: string().required("Name Required*"),
    contact_email: string().required("Email Required*").email("Invalid Email"),
    contact_subject: string().required("Subject Required*"),
    contact_message: string().required("Message Required*"),
  });
  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        <Form action="" className="contact_form">
          <div className="sectionHeader">
            <h1>
              <TbMessageCircle2Filled />
              Let's Talk
            </h1>
          </div>

          <div className="input-wrap">
            <InputText label="NAME" type="text" name="contact_name" required />
          </div>
          <div className="input-wrap">
            <InputText
              label="EMAIL"
              type="email"
              name="contact_email"
              required
            />
          </div>
          <div className="input-wrap">
            <InputText
              label="SUBJECT"
              type="text"
              name="contact_subject"
              required
            />
          </div>
          <div className="input-wrap">
            <InputTextArea
              label="MESSAGE"
              type="textarea"
              name="contact_message"
              required
            />
          </div>
          <div className="f-col-center w-full">
            <button type="submit" className="btn btn--light">
              Send Message
            </button>
          </div>
        </Form>
      </Formik>

      <div className="contactInfo f-col-center ">
        <div className="sectionHeader text-center">
          <h3>
            <BsPersonFill />
            Contact Me @
          </h3>
        </div>
        <div className="contactInfo_content">
          <Link to={"#"}>
            <BsFacebook />
            <p>@Lorem ipsum dolor sit amet.</p>
          </Link>
          <Link to={"#"}>
            <FaFacebookMessenger />
            <p>@Lorem ipsum dolor sit amet.</p>
          </Link>
          <Link to={"#"}>
            <BsGithub />
            <p>@Lorem ipsum dolor sit amet.</p>
          </Link>
          <Link to={"mailto:#"}>
            <FaEnvelope />
            <p>@Lorem ipsum dolor sit amet.</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionContact;
