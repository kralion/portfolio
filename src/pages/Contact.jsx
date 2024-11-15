import { IconButton, Tooltip, Card } from "@material-tailwind/react";
import { Inbox, ArrowRight } from "lucide-react";
import React from "react";
import backgroundImage from "../assets/footer.svg";
import { Socials } from "../data";

export default function Contact() {
  const isDarkMode = document.documentElement.classList.contains("dark");

  return (
    <section
      id="contact"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${
          isDarkMode
            ? "rgba(7, 14, 20, 0.9), rgba(7, 14, 20, 0.95)"
            : "rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95)"
        }), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="min-h-screen lg:h-auto space-y-12 lg:rounded-t-3xl py-20 text-center lg:p-24 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-100 dark:bg-orange-500  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200 dark:bg-orange-500  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-100 dark:bg-orange-500  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="500"
          className="space-y-6 lg:p-6 p-5"
        >
          <h3 className="text-2xl font-bold lg:text-5xl font-Obviously bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 py-2">
            Let's Work Together.
          </h3>
          <h5 className="font-inter lg:px-64 text-gray-700 text-lg">
            I welcome to opportunities to collaborate with like-minded
            individuals. Whether you have a project in mind or just want to
            connect, feel free to reach out.
          </h5>
        </div>

        <Card className="max-w-2xl mx-auto mt-12 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col gap-8">
            <div
              data-aos="flip-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="group"
            >
              <a
                target="_blank"
                className="w-full"
                rel="noreferrer"
                href="https://cal.com/brayanpaucar/contact"
              >
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 px-8 rounded-lg text-lg font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 group">
                  Schedule a Meeting
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>

            <div className="text-lg flex justify-center">
              <a
                href="mailto:brayanjoanpm@gmail.com"
                className="flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors duration-300"
              >
                <Inbox className="w-6 h-6 text-orange-500" />
                <span className="font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300">
                  brayanjoanpm@gmail.com
                </span>
              </a>
            </div>
          </div>
        </Card>

        <div className="pt-16">
          <div className="flex justify-center gap-4 lg:hidden">
            {Socials.map((social, index) => (
              <Tooltip key={index} placement="top" content={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <IconButton
                    color="white"
                    variant="gradient"
                    size="lg"
                    className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-orange-400 to-orange-600"
                  >
                    <img
                      title={social.label}
                      src={social.logo}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </IconButton>
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
