import { useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};
