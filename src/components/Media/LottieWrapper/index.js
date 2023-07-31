import Lottie from "lottie-react";

function LottieWrapper({ animationData, message }) {
  return (
    <div className="lottie-container">
      <Lottie animationData={animationData} />
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
