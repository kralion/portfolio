import { Chip, Tooltip } from "@material-tailwind/react";
import { Technologies } from "../data";
export default function TechStack() {
  return (
    <div className="  pt-24 lg:pt-16 text-center space-y-16 font-Source-Sans-Pro">
      <div className="text-center space-y-4">
        <Chip
          color="orange"
          className="w-fit rounded-full mx-auto  "
          variant="gradient"
          value="My Tech Stack"
        />
        <h3 className="lg:text-3xl text-2xl font-Inter gap-1">
          Tools and Technologies
        </h3>
      </div>
      <div className="grid grid-cols-2 border-2 lg:border-none border-dashed rounded-lg lg:mx-24 mx-5 lg:grid-cols-5 lg:gap-7 lg:py-5 lg:px-3 justify-center gap-5">
        {Technologies.slice(0, 10).map((tech, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="1000"
            key={index}
            title={tech.label}
            className="  lg:shadow-lg drop-shadow-lg lg:drop-shadow-none  rounded-2xl py-10 px-16 duration-200 "
          >
            <img
              src={tech.icon}
              className="rounded-lg hover:opacity-80 transition duration-200 ease-in-out"
              width={100}
              height={100}
              alt={tech.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
