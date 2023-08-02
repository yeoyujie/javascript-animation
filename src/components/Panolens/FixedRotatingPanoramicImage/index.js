import { useEffect, useRef } from 'react';
import { leftSideOverlayStyle, rightSideOverlayStyle, bottomLeftOverlayTextStyle, bottomRightOverlayTextStyle } from '../../../utils/stylePresets';
import * as PANOLENS from 'panolens';

const FixedRotatingPanoramicImage = ({
    imageSrc,
    container,
    scrollingFactor = 0.001,
    overlayText,
    textBoxOptions,
    overlayStyleType,
    viewerContainerHeight = "600vh"
}) => {
    const panoramaRef = useRef(null);

    // Choose the overlay style based on the overlayStyleType prop
    let textBoxStyle;
    switch (overlayStyleType) {
        case "left":
            textBoxStyle = { ...leftSideOverlayStyle, ...textBoxOptions };
            break;
        case "right":
            textBoxStyle = { ...rightSideOverlayStyle, ...textBoxOptions };
            break;
        case "bottomLeft":
            textBoxStyle = { ...bottomLeftOverlayTextStyle, ...textBoxOptions };
            break;
        case "bottomRight":
            textBoxStyle = { ...bottomRightOverlayTextStyle, ...textBoxOptions };
            break;
        default:
            textBoxStyle = { ...textBoxOptions };
    }

    useEffect(() => {
        const panorama = new PANOLENS.ImagePanorama(imageSrc);
        panoramaRef.current = panorama;

        const viewer = new PANOLENS.Viewer({
            container: document.querySelector(container),
            autoRotate: false,
            controlBar: false
        });

        viewer.add(panorama);

        let currentRotationY = 0;
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let targetRotationY;
            if (Math.floor(scrollY % 1000) > 500) {
                // panorama should stay at current rotation
                targetRotationY = currentRotationY;
            } else {
                // panorama should rotate from where its current position is stopped until it goes into the if block again
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
