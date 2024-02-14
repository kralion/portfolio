import { Chip, Tooltip } from "@material-tailwind/react";
import { Technologies } from "../data";
export default function TechStack() {
  return (
    <div className="  mt-20 text-center space-y-16 font-Source-Sans-Pro">
      <Chip
        color="orange"
        className="w-fit rounded-full mx-auto  "
        variant="gradient"
        value="My Tech Stack"
      />
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="1500"
        className="grid grid-cols-2 lg:mx-24 mx-5 lg:grid-cols-5 lg:gap-7 lg:py-5 lg:px-3 justify-center gap-5"
      >
        {Technologies.slice(0, 10).map((tech, index) => (
          <Tooltip placement="top" content={tech.label}>
            <div
              key={index}
              title={tech.label}
              className="  shadow-xl hover:shadow-[0.01rem_0.001rem_0.130rem_0.1rem_rgba(36,36,34,0.9)] rounded-2xl py-10 px-16 duration-200 "
            >
              <img
                src={tech.icon}
                className="rounded-lg"
                width={100}
                height={100}
                alt={tech.name}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
