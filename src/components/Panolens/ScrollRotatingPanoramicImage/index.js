import { useEffect, useRef } from 'react';
import { getTextBoxStyle } from '../../../utils/getTextBoxStyle';
import * as PANOLENS from 'panolens';

const ScrollRotatingPanoramicImage = ({
    imageSrc,
    container,
    scrollingFactor = 0.001,
    textBoxOptions,
    viewerOptions,
    overlayText,
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
            ...viewerOptions
        });

        viewer.add(panorama);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const rotationY = scrollY * scrollingFactor;
            panorama.rotation.y = rotationY;
        };
        window.addEventListener("scroll", handleScroll);
    }, [imageSrc, container]);

    return (
        <div className="viewer-container" style={{ height: viewerContainerHeight }}>
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
