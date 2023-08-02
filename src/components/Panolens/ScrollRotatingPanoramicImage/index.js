import { useEffect, useRef } from 'react';
import { baseDefaultStyle } from '../../../utils/stylePresets';
import * as PANOLENS from 'panolens';
// import * as THREE from 'three';


const ScrollRotatingPanoramicImage = ({
    imageSrc,
    container,
    textBoxOptions,
    overlayText,
    textBoxStyleType
  }) => {
    const panoramaRef = useRef(null);
  
    // Define the two textBoxStyle options
    const textBoxStyle1 = {
      ...baseDefaultStyle,
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: "25%",
      color: "white",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      fontSize: "1rem",
      ...textBoxOptions
    };
  
    const textBoxStyle2 = {
      ...baseDefaultStyle,
      position: "absolute",
      bottom: 50,
      right: 50,
      color: "white",
      padding: "10px",
      width: "30%",
      textAlign: "left",
      fontSize: "1rem",
      ...textBoxOptions
    };
  
    // Choose the textBoxStyle based on the textBoxStyleType prop
    const textBoxStyle =
      textBoxStyleType === "style1" ? textBoxStyle1 : textBoxStyle2;
  
    useEffect(() => {
      const panorama = new PANOLENS.ImagePanorama(imageSrc);
      panoramaRef.current = panorama;
  
      const viewer = new PANOLENS.Viewer({
        container: document.querySelector(container),
        autoRotate: false,
        controlBar: false
      });
  
      viewer.add(panorama);
  
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const rotationY = scrollY * 0.001;
        panorama.rotation.y = rotationY;
      };
      window.addEventListener("scroll", handleScroll);
    }, [imageSrc, container]);
  
    return (
      <div className="viewer-container" style={{ height: "300vh" }}>
        <div
          className={`image-container ${container.slice(1)}`}
          style={{ position: "sticky", top: 0 }}
        >
          {overlayText && <div style={textBoxStyle}>{overlayText}</div>}
        </div>
      </div>
    );
  };
  
  export default ScrollRotatingPanoramicImage;
  