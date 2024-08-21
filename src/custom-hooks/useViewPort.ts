import { ViewPort } from "@/types/commons.type";
import { useState, useEffect } from "react";

const useViewport = () => {
  const [viewport, setViewport] = useState<ViewPort>("xs");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setViewport("xs"); // Range from 0 to 480vw
      } else if (width >= 481 && width <= 1279) {
        setViewport("md"); // Range from 481 to 1279vw
      } else {
        setViewport("xl"); // Range from 1280vw to infinity
      }
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport;
};

export default useViewport;
