import { useEffect, useState, useRef } from "react";
import * as PANOLENS from "panolens";

const viewerOptions = {
  // container: The DOM element to append the viewer to. Default is document.body.
  // cameraFov: The field of view of the camera in degrees. Default is 60.
  // controlBar: Whether to show the control bar at the bottom of the viewer. Default is true.
  // controlButtons: An array of buttons to show on the control bar. Possible values are 'fullscreen', 'setting', 'video', 'info', 'link', and 'watch'. Default is ['fullscreen', 'setting', 'video'].
  // autoHideControlBar: Whether to hide the control bar when the mouse is inactive. Default is false.
  // autoHideInfospot: Whether to hide the infospots when the mouse is inactive. Default is false.
  // horizontalView: Whether to limit the horizontal view to 360 degrees. Default is false.
  // indicator: Whether to show the loading indicator when loading panoramas. Default is true.
  // output: The output type of the panoramas. Possible values are 'flat', 'stereo', and 'none'. Default is 'flat'.
  // enableReticle: Whether to enable the reticle for gaze interaction. Default is false.
  // dwellTime: The dwell time for reticle selection in milliseconds. Default is 1500.
  // autoReticleSelect: Whether to automatically select the hovered object by reticle. Default is true.
  // viewIndicator: Whether to show the view indicator on the top right corner. Default is false.
  // autoRotate: Whether to enable auto rotation of the camera. Default is false.
  // autoRotateSpeed: The speed of auto rotation in radians per second. Default is -0.1.
  // autoRotateActivationDuration: The duration of mouse inactivity before auto rotation starts in milliseconds. Default is 5000.
  // orbitControls: Whether to use orbit controls instead of device orientation controls. Default is false.
  // Pass it to the component as a prop in src\App.js. Example:
  // autoRotate: true,
  // cameraFov: 120,
  // autoRotateSpeed: 2.5,
};

const CustomPanolens = ({
  imageSrc,
  overlaySrc,
  overlayText,
  container,
  viewerOptions,
  textBoxOptions,
  animateTextBox = true,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const defaultStyle = {
    position: "absolute",
    bottom: 50,
    right: 50,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "10px",
    width: "30%",
    textAlign: "left",
    animation: animateTextBox
      ? inView
        ? "fadeIn 1s linear"
        : "fadeOut 1s linear"
      : "",
    opacity: animateTextBox ? (inView ? 1 : 0) : 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const panorama = new PANOLENS.ImagePanorama(imageSrc);

    const viewer = new PANOLENS.Viewer({
      container: document.querySelector(container),
      ...viewerOptions,
    });

    viewer.add(panorama);
  }, [imageSrc, container]);

  return (
    <div className="viewer-container" ref={ref}>
      <div className={`image-container ${container.slice(1)}`} />
      {overlaySrc && (
        <img
          src={overlaySrc}
          alt="overlay"
          style={{ position: "absolute", bottom: 0, left: 0 }}
        />
      )}
      {overlayText && (
        <div
          // Merge defaultStyle and textBoxOptions, with textBoxOptions taking precedence
          style={{ ...defaultStyle, ...textBoxOptions }}
        >
          {overlayText}
        </div>
      )}
    </div>
  );
};

export default CustomPanolens;
