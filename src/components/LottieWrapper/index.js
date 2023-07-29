import { useRef } from "react";
import useIntersectionObserver from "../useIntersectionObserver";
import Lottie from "lottie-react";

function LottieWrapper({ animationData, message }) {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);

  useIntersectionObserver(lottieRef, null, { threshold: 0.5 });

  return (
    <div ref={containerRef} className="lottie-container">
      <Lottie ref={lottieRef} animationData={animationData} />
      <p>{message}</p>
      <button
        className="scroll-to-top-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Scroll to Top
      </button>
    </div>
  );
}

export default LottieWrapper;
