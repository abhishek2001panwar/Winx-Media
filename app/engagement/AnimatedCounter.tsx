import React, { useEffect, useState } from "react";

export function AnimatedCounter({ value, duration = 800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let end = typeof value === "number" ? value : parseFloat(value);
    let increment = end / (duration / 16);
    let raf: number;

    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return <>{typeof value === "string" && value.includes("k") ? `${(count / 1000).toFixed(1)}k` : Math.floor(count)}</>;
}