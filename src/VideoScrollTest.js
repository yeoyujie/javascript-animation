import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import animatedVideo from './assets/video.mp4'


gsap.registerPlugin(ScrollTrigger);

const VideoScrollTest = () => {
  const introRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    const intro = introRef.current;
    const video = videoRef.current;
    const text = textRef.current;
    const section = sectionRef.current;
    const end = endRef.current;

    // Scenes
    gsap.to(intro, {
      scrollTrigger: {
        trigger: intro,
        pin: true,
        start: "top top",
        end: "+=9000"
      }
    });

    // Text Animation
    gsap.fromTo(text, { opacity: 1 }, { opacity: 0, scrollTrigger: {
      trigger: intro,
      start: "top top",
      end: "+=3000"
    }});

    // Video Animation
    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    ScrollTrigger.create({
      trigger: intro,
      onUpdate: e => {
        scrollpos = e.progress;
      }
    });

    setInterval(() => {
      delay += (scrollpos - delay) * accelamount;
      video.currentTime = delay;
    }, 33.3);
  }, []);

  return (
    <>
      <div className="intro" ref={introRef}>
        <video ref={videoRef}> src={animatedVideo} preload="metadata"</video>
        <h1 ref={textRef}></h1>
      </div>
      <section ref={sectionRef}>
        <h1 ref={endRef}></h1>
      </section>
    </>
  );
};


export default VideoScrollTest;
