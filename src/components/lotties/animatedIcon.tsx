import Lottie, { LottieRef } from "lottie-react";
import { useRef, useState } from "react";

interface IAnimatedIcon {
  animationData: unknown;
}

export const AnimatedIcon = ({ animationData }: IAnimatedIcon) => {
  const lottieRef: LottieRef = useRef(null);

  const handleMouseEnter = () => {
    lottieRef.current?.play();
  };

  const handleAnimateEnd = () => {
    lottieRef.current?.stop();
  };
  return (
    <div onMouseOver={handleMouseEnter} className={"side-icon-container"}>
      <Lottie
        autoplay={false}
        lottieRef={lottieRef}
        animationData={animationData}
        onLoopComplete={handleAnimateEnd}
        style={{
          width: "28px",
          height: "28px",
        }}
      />
    </div>
  );
};
