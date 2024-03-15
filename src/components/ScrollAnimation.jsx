import React from "react";
import Lottie from "react-lottie";
import ScrollAnimationJSON from "../assets/json/arrow_down_line.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ScrollAnimationJSON,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function ScrollAnimation() {
  return (
    <div className="absolute bottom-5 hidden  lg:flex justify-center">
      <Lottie options={defaultOptions} height={30} width={30} />
    </div>
  );
}
