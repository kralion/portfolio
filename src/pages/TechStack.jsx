import { TechStack as Techs } from "../data";
function TechStack() {
  return (
    <div className=" lg:mx-24 mx-5 mt-20 text-center font-Source-Sans-Pro">
      <div className="lg:my-10 pb-4 text-center gap-5">
        <span className="bg-[#eb5e28] px-3  text-gray-100 font-semibold py-1 w-fit rounded-full">
          My Tech Stack
        </span>
      </div>
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="1500"
        className="grid grid-cols-2 lg:grid-cols-5 lg:gap-5 lg:py-5 lg:px-3 justify-center gap-5"
      >
        {Techs.slice(0, 10).map((tech, index) => (
          <div
            key={index}
            title={tech.label}
            className=" border shadow-xl boder-slate-700 hover:shadow-[0.01rem_0.001rem_0.130rem_0.1rem_rgba(36,36,34,0.9)] rounded-lg py-10 px-16 duration-200 "
          >
            <img src={tech.icon} width={100} alt={tech.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
