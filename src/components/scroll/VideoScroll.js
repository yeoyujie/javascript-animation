import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VideoScroll.css';
import MiniMap from '../minimap/minimap';
import MessageBox from '../messagebox/messagebox';

function VideoScroll({ videoSrc, srcMap }) {
  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);


  const [messageBox1Top, setMessageBox1Top] = useState('50%');
  const [messageBox1Opacity, setMessageBox1Opacity] = useState(0);
  const [messageBox2Top, setMessageBox2Top] = useState('50%');
  const [messageBox2Opacity, setMessageBox2Opacity] = useState(0);


  function calculateMessageBoxPosition(
    index,
    startTime,
    endTime,
    pinDuration,
    pinPosition,
    videoCurrentTime
  ) {
    let top = '100%';
    let opacity = 0;
    const fadeInDuration = (endTime - startTime - pinDuration) / 2;
    const fadeOutDuration = fadeInDuration;
    if (videoCurrentTime >= startTime && videoCurrentTime <= endTime) {
      if (videoCurrentTime <= startTime + fadeInDuration) {
        top = `${100 -
          (100 - pinPosition) *
          ((videoCurrentTime - startTime) / fadeInDuration)}%`;
        opacity = Math.max(
          0,
          Math.min(1, (videoCurrentTime - startTime) / fadeInDuration)
        );
      } else if (videoCurrentTime <= startTime + fadeInDuration + pinDuration) {
        top = `${pinPosition + index * 20}%`;
        opacity = 1;
      } else {
        top = `${pinPosition +
          index * 20 -
          (pinPosition + index * 20) *
          ((videoCurrentTime - startTime - fadeInDuration - pinDuration) /
            fadeOutDuration)}%`;
        opacity = Math.max(
          0,
          Math.min(1, (endTime - videoCurrentTime) / fadeOutDuration)
        );
      }
    }
    return { top, opacity };
  }



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

              // Calculate new top and opacity values for message box 1
              const { top: messageBox1Top, opacity: messageBox1Opacity } =
                calculateMessageBoxPosition(0, 1, 2, 0.5, 40, videoCurrentTime);
              setMessageBox1Top(messageBox1Top);
              setMessageBox1Opacity(messageBox1Opacity);

              // Calculate new top and opacity values for message box 2
              const { top: messageBox2Top, opacity: messageBox2Opacity } =
                calculateMessageBoxPosition(1, 2, 5, 1, 60, videoCurrentTime);
              setMessageBox2Top(messageBox2Top);
              setMessageBox2Opacity(messageBox2Opacity);

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
        <video id="video" ref={videoRef} src={videoSrc}></video>
        <MiniMap videoCurrentTime={videoCurrentTime} srcMap={srcMap} />
        <MessageBox
          message="Message Box 1"
          show={videoCurrentTime >= 1 && videoCurrentTime <= 2}
          top={messageBox1Top}
          opacity={messageBox1Opacity}
        />
        <MessageBox
          message="Message Box 2"
          show={videoCurrentTime >= 3 && videoCurrentTime <= 5}
          top={messageBox2Top}
          opacity={messageBox2Opacity}
        />
      </div>
    </>
  );
}

export default VideoScroll;