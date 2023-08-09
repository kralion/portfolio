import React from "react";
function Contact() {
  return (
    <section
      id="contact"
      className=" lg:mx-24 my-24 text-center font-Source-Sans-Pro"
    >
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        data-aos-duration="500"
        className="lg:p-20 p-10 flex flex-col gap-5"
      >
        <h3 className="lg:text-4xl text-3xl font-bold">
          Interested In Working With Me ?
        </h3>
        <h5 className="text-xl text-slate-500">
          I welcome opportunities to collaborate with talented developers. Let's
          connect to see how we can build robust solutions that deliver real
          value.
        </h5>
      </div>
      <div
        data-aos="flip-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="mt-7 mb-7 group "
      >
        <div className="bg-[#FDC738] group-hover:translate-x-[2px] top-[5px] lg:left-[500px] left-[130px] group-hover:translate-y-[2px] duration-300 absolute w-32 h-10"></div>
        <button className="group-hover:-translate-x-[2px] active:focus:ring-4 active:bg-slate-600 active:focus:ring-[#FDC738] group-hover:-translate-y-[3px] relative bg-black text-gray-100 font-semibold px-7 py-2 ease-in-out duration-300 uppercase   ">
          <a href="https://wa.me/51914019629">LET'S TALK</a>
        </button>
      </div>
    </section>
  );
}

export default Contact;
