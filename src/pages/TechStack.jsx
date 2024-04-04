import { Chip, Tooltip } from "@material-tailwind/react";
import { Technologies } from "../data";
export default function TechStack() {
  return (
    <div className="  pt-24 lg:pt-16 text-center lg:space-y-20 space-y-16 font-Source-Sans-Pro">
      <div className="text-center space-y-10">
        <Chip
          color="orange"
          className="w-fit rounded-full mx-auto  "
          variant="gradient"
          value="My Tech Stack"
        />
        <h3 className="lg:text-3xl text-2xl font-Inter gap-1">
          Technologies I work with
        </h3>
      </div>
      <div className="grid grid-cols-2 border-2 lg:border-none border-dashed rounded-lg lg:mx-72 mx-5 lg:grid-cols-5  lg:gap-y-14 lg:py-5 lg:px-3 justify-center ">
        {Technologies.slice(0, 15).map((tech, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="1000"
            key={index}
            title={tech.label}
            className="flex items-center justify-center  rounded-2xl  duration-200 "
          >
            <img
              src={tech.icon}
              className="rounded-lg max-h-20 max-w-20 hover:opacity-80 transition duration-200 ease-in-out"
              alt={tech.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
