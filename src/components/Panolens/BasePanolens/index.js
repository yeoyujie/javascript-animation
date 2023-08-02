import { useEffect } from "react";
import * as PANOLENS from "panolens";

const BasePanolens = ({ imageSrc, overlayText, container }) => {
  useEffect(() => {
    const panorama = new PANOLENS.ImagePanorama(imageSrc);

    const viewer = new PANOLENS.Viewer({
      container: document.querySelector(container),
      autoRotate: true,
      autoRotateSpeed: 0.5,
      controlBar: false,
    });

    viewer.add(panorama);
  }, [imageSrc, container]);

  return (
    <div className="viewer-container">
      <div className={`image-container ${container.slice(1)}`} />
      {overlayText && (
        <div
          style={{
            position: "absolute",
            bottom: 100,
            right: 100,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "10px",
          }}
        >
          {overlayText}
        </div>
      )}
    </div>
  );
};

export default BasePanolens;
