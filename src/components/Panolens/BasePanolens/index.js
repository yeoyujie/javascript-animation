import { useEffect } from "react";
import { getTextBoxStyle } from "../../../utils/getTextBoxStyle";
import * as PANOLENS from "panolens";

const BasePanolens = ({ imageSrc, overlayText, overlayStyleType="bottomRight", textBoxOptions, container }) => {

  const textBoxStyle = getTextBoxStyle(overlayStyleType, textBoxOptions);

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
        <div style={textBoxStyle}>
          {overlayText}
        </div>
      )}
    </div>
  );
};

export default BasePanolens;
