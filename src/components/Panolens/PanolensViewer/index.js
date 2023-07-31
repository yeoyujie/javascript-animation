import { useEffect, useRef } from 'react';
import * as PANOLENS from 'panolens';
import * as ScrollMagic from 'scrollmagic';
// import * as THREE from 'three';


const PanolensViewer = ({ imageSrc, container }) => {
    const panoramaRef = useRef(null);

    useEffect(() => {
        const panorama = new PANOLENS.ImagePanorama(imageSrc);
        panoramaRef.current = panorama;

        const viewer = new PANOLENS.Viewer({
            container: document.querySelector(container),
            autoRotate: false,
            controlBar: false,
        });

        viewer.add(panorama);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const rotationY = scrollY * 0.01;
            panorama.rotation.y = rotationY;
        };
        window.addEventListener('scroll', handleScroll);
        
    }, [imageSrc, container]);

    return (
        <div className="viewer-container">
            <div className={`image-container ${container.slice(1)}`} />
        </div>
    );
};

export default PanolensViewer;