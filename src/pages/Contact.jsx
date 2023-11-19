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
        <h3 className="lg:text-4xl text-2xl font-bold">
          Interested In Working With Me?
        </h3>
        <h5 className="lg:text-xl text-slate-500 lg:px-44">
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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/joan-paucar/"
        >
          <button class="button lg:text-md text-sm  rounded group font-Source-Sans-Pro font-bold uppercase ">
            Contact Me
          </button>
        </a>
      </div>
    </section>
  );
}

export default Contact;
