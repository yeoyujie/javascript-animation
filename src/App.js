import { Element } from 'react-scroll';

import VideoScroll from "./components/Media/VideoScroll";
import ProgressBar from "./components/ProgressBar";
import WelcomeSection from "./components/WelcomeSection";
import TextSection from "./components/TextSection";
import BasePanolens from "./components/Panolens/BasePanolens";
import ScrollRotatingPanoramicImage from "./components/Panolens/ScrollRotatingPanoramicImage";
import FixedRotatingPanoramicImage from './components/Panolens/FixedRotatingPanoramicImage';
import CustomPanolens from "./components/Panolens/CustomPanolens";
import StaticPhotoWithText from "./components/PhotoTextComponents/StaticPhotoWithText";
import StickyCaptionImage from "./components/PhotoTextComponents/StickyCaptionImage";
import StaticPhotoWithSideOverlay from './components/PhotoTextComponents/StaticPhotoWithSideOverlay';
import VideoPlayer from "./components/Media/VideoPlayer";
import LottieWrapper from "./components/Media/LottieWrapper";

import animatedVideo from "./assets/video.mp4";
import mastHeadImg from "./assets/masthead.jpg";
import smartCityImg from "./assets/smartcity.webp";
import miniMap from "./assets/sg.svg";
import Success from "./assets/success.json";
import pic from "./assets/panorama/panel1.jpeg";
import pic2 from "./assets/panorama/panel2.jpg";

import landingGif from "./assets/landing.gif";
import templateGif from "./assets/template.gif";
import googleImg from "./assets/google.png";
import singaporeImg from "./assets/singapore.jpg";

import "./App.css";

function App() {
  const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Mauris egestas, libero nec tristique pellentesque, quam nibh aliquet urna, ut ornare sem leo vitae eros.
  Nunc porttitor ut tortor id pulvinar. Praesent nec velit lobortis, eleifend magna ut, suscipit est.
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
  Curabitur vitae augue velit. Pellentesque ac tortor at ligula posuere euismod ut id elit. `;
  return (
    <div className="App">
      <ProgressBar />
      <WelcomeSection imageSrc={landingGif} />
      <FixedRotatingPanoramicImage
        imageSrc={`${pic}?instance=8`}
        container=".image-container-8"
        scrollingFactor={0.002}
        overlayText={defaultText} />
      <TextSection
        text={defaultText}
        backgroundImage={singaporeImg}
        
      />
      {/* 
      We're appending a unique `instance` query parameter to the `imageSrc` prop for each instance of the `BasePanolens` component. 
      This will cause the browser to treat each image URL as a separate resource, even if they point to the same image file. 
      This should allow both instances of the `BasePanolens` component to load and display the image correctly.
      */}
      <BasePanolens
        imageSrc={`${pic}?instance=1`}
        container=".image-container-1"
        overlayText={defaultText}
      />
      <BasePanolens
        imageSrc={`${pic2}?`}
        container=".image-container-2"
        overlayText={defaultText} 
        overlayStyleType='left'
      />
      <CustomPanolens
        imageSrc={`${pic}?instance=2`}
        overlaySrc={googleImg}
        overlayText={defaultText}
        container=".image-container-3"
        viewerOptions={{
          autoRotate: true,
          cameraFov: 120,
          autoRotateSpeed: 1.8,
        }}
        textBoxOptions={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />
      <StickyCaptionImage
        id="image1"
        imageSrc={templateGif}
        caption={defaultText}
      />
      <VideoPlayer videoSrc={animatedVideo} thresholdValue={0.5} />
      <StickyCaptionImage
        id="image2"
        imageSrc={mastHeadImg}
        caption={defaultText}
        textBoxOptions={{
          fontSize: "1.2rem",
          textAlign: "center"
        }}
      />

      <StaticPhotoWithSideOverlay imageSrc={mastHeadImg} caption={defaultText} overlayPosition="left" />
      <StaticPhotoWithSideOverlay imageSrc={smartCityImg} caption={defaultText} />
      <ScrollRotatingPanoramicImage
        imageSrc={`${pic}?instance=4`}
        container=".image-container-4"
        overlayText={defaultText}
        overlayStyleType="right"
        viewerOptions={{ controlBar: true }} />
      <StaticPhotoWithText imageSrc={mastHeadImg} overlayText={defaultText} textBoxOptions={{ fontSize: "1.2rem" }} />
      <ScrollRotatingPanoramicImage
        imageSrc={`${pic}?instance=5`}
        container=".image-container-5"
        overlayText={defaultText}
        overlayStyleType="bottomLeft" />

      <LottieWrapper
        animationData={Success}
        message="Congratulations on completing the tour!"
      />
      {/* <Element name="scrollContainer" className="scroll-container">
        <section className="intro-section" style={{ backgroundImage: `url(${mastHeadImg})` }}>
          <p>Welcome to the virtual site visit</p>
        </section>
        <VideoScroll videoSrc={animatedVideo} srcMap={miniMap} />
      </Element> */}
    </div>
  );
}

export default App;
