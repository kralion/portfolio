import React from 'react'
function Contact() {
    return (
        <section id='contact' className=" lg:mx-24 my-24 text-center font-Source-Sans-Pro">
            <div data-aos="fade-in" data-aos-delay="200" data-aos-duration="500" className="lg:p-20 p-10 flex flex-col gap-5">
                <h3 className="lg:text-4xl text-3xl font-bold">Interested In Working With Me ?</h3>
                <h5 className='text-xl text-slate-500'>Connect with me to discover how together we can take your projects to the next level !</h5>
            </div>

            <button data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" className=" bg-[#FDC738] hover:text-[#e4bc50] hover:bg-black  font-semibold px-5 py-2 ease-in-out duration-300 active:shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(167,138,59,0.8)]  shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(15,15,15,15)] hover:shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(253,199,56,0.8)]">
                <a href="https://wa.me/51914019629">LET'S TALK</a>
            </button>
        </section>
    )
}

export default Contact