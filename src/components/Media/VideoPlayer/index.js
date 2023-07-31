import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useIntersectionObserver(
    videoRef,
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    },
    { threshold: 0.5 }
  );

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      style={{ width: "100vw", display: "flex" }}
      loop
      muted
    />
  );
};

export default VideoPlayer;
