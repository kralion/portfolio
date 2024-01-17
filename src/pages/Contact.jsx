import React from "react";
import backgroundImage from "../assets/gradient.png";
import { Mail, PhoneCall, Menu } from "lucide-react";
export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" lg:p-24 rounded-t-3xl py-10 mt-36 space-y-8 text-center font-Source-Sans-Pro"
    >
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className="space-y-8"
      >
        <h3 className="lg:text-4xl text-2xl font-bold">
          Interested In Working With Me?
        </h3>
        <h5 className=" text-gray-500 lg:px-64">
          I welcome opportunities to collaborate with talented people. Let's
          connect to see how we can create strong solutions that provide real
          value to the world around us.
        </h5>
      </div>
      <div
        data-aos="flip-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        className=" group "
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/joan-paucar/"
        >
          <button className="button lg:text-md text-sm  rounded group font-Source-Sans-Pro my-14 font-bold uppercase ">
            Contact Me
          </button>
        </a>
      </div>
      <div className="flex justify-center m-3 lg:mx-0 font-Source-Sans-Pro gap-10">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/51914019629"
          className="flex cursor-pointer hover:opacity-70 items-center gap-2"
        >
          <PhoneCall color="#ffc40c" />
          +51 914 019 629
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:jpm_2001@icloud.com?subject=Contact to DvJoan,%20J!&body=Hi Joan,%20I see your portfolio and ... !
            "
          className="flex cursor-pointer hover:opacity-70 items-center gap-2"
        >
          <Mail color="#ffc40c" />
          jpm_2001@icloud.com
        </a>
      </div>
    </section>
  );
}
