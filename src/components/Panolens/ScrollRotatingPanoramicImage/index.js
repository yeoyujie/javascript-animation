import { useEffect, useRef } from 'react';
import { leftSideOverlayStyle, rightSideOverlayStyle, bottomLeftOverlayTextStyle, bottomRightOverlayTextStyle } from '../../../utils/stylePresets';
import * as PANOLENS from 'panolens';

const ScrollRotatingPanoramicImage = ({
    imageSrc,
    container,
    textBoxOptions,
    overlayText,
    overlayStyleType
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
