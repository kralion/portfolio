import { IconButton, Tooltip } from "@material-tailwind/react";
import { Inbox } from "lucide-react";
import React from "react";
import backgroundImage from "../assets/footer.svg";
import { Socials } from "../data";
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
      className="  pt-20 text-black h-screen lg:h-auto space-y-8 lg:rounded-t-3xl py-10 text-center lg:p-24"
    >
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className="space-y-5 lg:p-6 p-5"
      >
        <h3 className="text-xl font-bold lg:text-4xl font-Obviously">
          Interested In Working With Me?
        </h3>
        <h5 className="  font-inter  lg:px-64">
          I welcome opportunities to collaborate with talented people. Let's
          connect to see how we can create strong solutions that provide real
          value to the world around us.
        </h5>
      </div>
      <div className="flex flex-col justify-center gap-4">
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
            href="https://cal.com/brayanpaucar/portfolio-contact"
          >
            <button className="button  lg:text-md   group rounded text-sm font-bold uppercase ">
              Contact Me
            </button>
          </a>
        </div>

        <div className="text-xs lg:text-[15px] lg:mt-8  flex px-10  justify-center">
          <span className="flex cursor-pointer items-center gap-2 hover:opacity-70">
            <Inbox size={20} />
            brayanjoanpm@gmail.com
          </span>
        </div>
      </div>
      <div className="pt-20 space-y-8">
        <ul className="flex justify-center gap-2 lg:hidden">
          {Socials.map((social, index) => (
            <li key={index} className="cursor-pointer">
              <Tooltip placement="top" content={social.label}>
                <a href={social.url} target="_blank" rel="noreferrer">
                  <IconButton color="white" variant="gradient" size="sm">
                    <img
                      title={social.label}
                      src={social.logo}
                      alt={social.name}
                      width={20}
                      height={20}
                    />
                  </IconButton>
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
