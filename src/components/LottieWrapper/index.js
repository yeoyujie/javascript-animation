import { useEffect, useRef } from "react";
import Lottie from "lottie-react";

function LottieWrapper({ animationData, message }) {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (lottieRef.current) {
            if (entry.isIntersecting) {
              lottieRef.current.play();
            } else {
              lottieRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="lottie-container">
      <Lottie ref={lottieRef} animationData={animationData} />
      <p>{message}</p>
      <button
        className="scroll-to-top-button"
        onClick={() => window.scrollTo(0, 0)}
      >
        Scroll to Top
      </button>
    </div>
  );
}

export default LottieWrapper;
