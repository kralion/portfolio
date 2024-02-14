import { Mail, PhoneCall } from "lucide-react";
import React from "react";
import backgroundImage from "../assets/gradient.png";
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
      className=" font-Source-Sans-Pro mt-36 space-y-8 lg:rounded-t-3xl py-10 text-center lg:p-24"
    >
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className="space-y-8 p-10"
      >
        <h3 className="text-2xl font-bold lg:text-4xl">
          Interested In Working With Me? Please let me know!
        </h3>
        <h5 className=" text-gray-800 lg:px-64">
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
          className="w-fit"
          rel="noreferrer"
          href="https://www.linkedin.com/in/joan-paucar/"
        >
          <button className="button lg:text-md font-Source-Sans-Pro  group my-7 lg:mb-10 rounded text-sm font-bold uppercase ">
            Contact Me
          </button>
        </a>
      </div>
      <div className="font-Source-Sans-Pro m-3 flex justify-center gap-10 lg:mx-0">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/51914019629"
          className="flex cursor-pointer items-center gap-2 hover:opacity-70"
        >
          <PhoneCall color="#ffc40c" />
          +51 914 019 629
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:jpm_2001@icloud.com?subject=Contact to DvJoan,%20J!&body=Hi Joan,%20I see your portfolio and ... !
            "
          className="flex cursor-pointer items-center gap-2 hover:opacity-70"
        >
          <Mail color="#ffc40c" />
          jpm_2001@icloud.com
        </a>
      </div>
    </section>
  );
}
