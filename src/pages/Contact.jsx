import React from 'react'

function Contact() {
    return (
        <div className=" mx-24 my-24 text-center font-Source-Sans-Pro">
            <div className="p-20 flex flex-col gap-5">
                <h3 className="text-4xl font-bold">Interested In Working With Me ?</h3>
                <h5 className='text-xl text-slate-500'>Connect with me to discover how together we can take your projects to the next level !</h5>
            </div>
            <button className="bg-[#FDC738] hover:text-[#e4bc50] hover:bg-black font-semibold px-5 py-2 ease-in-out duration-300  shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(15,15,15,15)] hover:shadow-[0.3rem_0.3rem_0.01rem_0.1rem_rgba(253,199,56,0.8)]">
                <a href="https://www.linkedin.com/in/brayan-joan">LET'S TALK</a>
            </button>

        </div>
    )
}

export default Contact