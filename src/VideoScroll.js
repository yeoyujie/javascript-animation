import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import animatedVideo from './assets/video.mp4'
import './VideoScroll.css';

function VideoScroll() {
    const IntroVideoRef = useRef(null);
    const videoRef = useRef(null);
  
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
          <video id="video" ref={videoRef} src={animatedVideo} ></video>
        </div>
        <div>
          <h1>SECTION</h1>
        </div>
      </>
    );
  }

export default VideoScroll;