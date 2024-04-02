"use client";

import { useEffect, useRef } from "react";
import { CountUp } from "countup.js/dist/countUp";

const CountUpComponent = ({ end }) => {
  const countUpRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countUp = new CountUp(countUpRef.current, end);
          if (!countUp.error) {
            countUp.start();
            observer.unobserve(entry.target);
          } else {
            console.error(countUp.error);
          }
        }
      });
    }, options);

    observer.observe(countUpRef.current);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [end]);

  return <span ref={countUpRef} />;
};

export default CountUpComponent;
