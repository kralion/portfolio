import { TechStack as Techs } from "../data";
function TechStack() {
  return (
    <div className=" lg:mx-24 mx-5 my-12 text-center font-Source-Sans-Pro">
      <div className="lg:p-20 pb-4  flex flex-col gap-5">
        <span className="bg-[#eb5e28] w-[102px] text-center px-3 my-2 text-gray-100 font-semibold py-1 self-center pb-2 rounded-full">
          Tech Stack
        </span>
      </div>
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="1500"
        className="grid grid-cols-2 lg:grid-cols-5 lg:gap-5 lg:py-5 lg:px-3 justify-center gap-5"
      >
        {Techs.map((tech, index) => (
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
