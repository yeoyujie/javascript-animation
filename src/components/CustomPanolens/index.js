import { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';

const CustomPanolens = ({ imageSrc, overlaySrc, overlayText, container, viewerOptions }) => {

  useEffect(() => {
    const panorama = new PANOLENS.ImagePanorama(imageSrc);

    const viewer = new PANOLENS.Viewer({
      container: document.querySelector(container),
      ...viewerOptions,
    });

    viewer.add(panorama);

  }, [imageSrc, container]);

  return (
    <div className="viewer-container">
      <div className={`image-container ${container.slice(1)}`} />
      {overlaySrc && (
        <img
          src={overlaySrc}
          style={{ position: 'absolute', bottom: 0, left: 0 }}
        />
      )}
      {overlayText && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '10px',
          }}
        >
          {overlayText}
        </div>
      )}
    </div>
  );
};

export default CustomPanolens;