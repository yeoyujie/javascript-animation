import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoScroll.css';
import MiniMap from '../minimap/minimap';

function VideoScroll({ videoSrc, srcMap }) {
  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;

    const onLoadedMetadata = () => {
      const videoDuration = video.duration;

      ScrollTrigger.create({
        trigger: IntroVideoRef.current,
        scrub: true,
        pin: IntroVideoRef.current,
        start: 'top top',
        end: () => `+=${videoDuration * 1000}`,
        markers: true,

        onUpdate: function (self) {
          if (videoRef.current) {
            let scrollPos = self.progress;
            let videoCurrentTime = videoDuration * scrollPos;

            if (videoCurrentTime) {
              videoRef.current.currentTime = videoCurrentTime;
              setVideoCurrentTime(videoCurrentTime);
            }
          }
        },
      });
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, [IntroVideoRef, videoRef]);


  return (
    <>
      <div ref={IntroVideoRef} className="intro">
        <video id="video" ref={videoRef} src={videoSrc} ></video>
        <MiniMap videoCurrentTime={videoCurrentTime} srcMap={srcMap} />
      </div>
    </>
  );
}

export default VideoScroll;