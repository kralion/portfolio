import React, { useState, useEffect } from "react";

export function Header({ children }: { children: React.ReactNode }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Function to handle scroll event
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };

  // Effect to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-delay="200"
      className={`flex lg:hidden top-0 w-full justify-between items-center transition-transform duration-300 ease-in-out ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <span className="text-3xl m-4 lg:text-6xl font-Allura">
        Brayan Paucar
      </span>
      {children}
    </header>
  );
}
