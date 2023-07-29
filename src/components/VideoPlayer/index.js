import { useRef, useEffect } from "react";
import useIntersectionObserver from "../useIntersectionObserver";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useIntersectionObserver(videoRef, null, { threshold: 0.5 });

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      style={{ width: "100vw" }}
      loop
      muted
    />
  );
};

export default VideoPlayer;
