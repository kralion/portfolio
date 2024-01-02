import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({ children }) {
  useEffect(() => {
    AOS.init();

    window.addEventListener("scroll", AOS.refresh);

    return () => {
      window.removeEventListener("scroll", AOS.refresh);
    };
  }, []);

  return <>{children}</>;
}
