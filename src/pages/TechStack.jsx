import { Technologies } from "../data";
export default function TechStack() {
  return (
    <div className="  mt-20 text-center font-Source-Sans-Pro">
      <div className="lg:my-10 pb-4 text-center gap-1 flex items-center ">
        <hr className="w-1/2 " />
        <span className="bg-[#eb5e28] px-3 text-gray-100 font-semibold py-1 w-36 rounded-full">
          My Tech Stack
        </span>
        <hr className="w-1/2" />
      </div>
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="1500"
        className="grid grid-cols-2 lg:mx-24 mx-5 lg:grid-cols-5 lg:gap-5 lg:py-5 lg:px-3 justify-center gap-5"
      >
        {Technologies.slice(0, 10).map((tech, index) => (
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
        ))}
      </div>
    </div>
  );
}
