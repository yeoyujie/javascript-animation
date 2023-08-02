import { useEffect, useRef } from 'react';
import { getTextBoxStyle } from '../../../utils/getTextBoxStyle';
import * as PANOLENS from 'panolens';

const FixedRotatingPanoramicImage = ({
    imageSrc,
    container,
    scrollingFactor = 0.001,
    /* Increasing the value of rotationThreshold will cause the panorama to rotate for longer before stopping, 
    while decreasing it will cause the panorama to stop rotating more frequently. */
    rotationThreshold = 1000,
    overlayText,
    textBoxOptions,
    viewerOptions,
    overlayStyleType="right",
    viewerContainerHeight = "600vh"
}) => {
    const panoramaRef = useRef(null);

    const textBoxStyle = getTextBoxStyle(overlayStyleType, textBoxOptions);

    useEffect(() => {
        const panorama = new PANOLENS.ImagePanorama(imageSrc);
        panoramaRef.current = panorama;

        const viewer = new PANOLENS.Viewer({
            container: document.querySelector(container),
            autoRotate: false,
            controlBar: false,
            ...viewerOptions,
        });

        viewer.add(panorama);

        let currentRotationY = 0;
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let targetRotationY;
            if (Math.floor(scrollY % (rotationThreshold * 2)) > rotationThreshold) {
                // panorama stay at current rotation location
                targetRotationY = currentRotationY;
            } else {
                // panorama rotate from where its current position was stopped previously   
                targetRotationY = scrollY * scrollingFactor;
            }
            currentRotationY += (targetRotationY - currentRotationY) * 0.1;
            panorama.rotation.y = currentRotationY;
        };
        
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScroll);
    }, [imageSrc, container]);

    return (
        <div className="viewer-container" style={{ height: viewerContainerHeight  }}>
            <div
                className={`image-container ${container.slice(1)}`}
                style={{ position: "sticky", top: 0 }}
            >
                {overlayText && <div style={textBoxStyle}>{overlayText}</div>}
            </div>
        </div>
    );
};

export default FixedRotatingPanoramicImage;
