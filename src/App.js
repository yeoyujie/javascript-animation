import { Element } from 'react-scroll';

import VideoScroll from "./components/Media/VideoScroll";
import ProgressBar from "./components/ProgressBar";
import LandingPage from "./components/LandingPage";
import TextSection from "./components/TextSection";
import BasePanolens from "./components/Panolens/BasePanolens";
import ScrollRotatingPanoramicImage from "./components/Panolens/ScrollRotatingPanoramicImage";
import CustomPanolens from "./components/Panolens/CustomPanolens";
import StaticPhotoWithText from "./components/StaticPhotoWithText";
import StickyCaptionImage from "./components/StickyCaptionImage";
import StaticPhotoWithSideCaptions from './components/StaticPhotoWithSideCaptions';
import VideoPlayer from "./components/Media/VideoPlayer";
import LottieWrapper from "./components/Media/LottieWrapper";

import animatedVideo from "./assets/video.mp4";

import aerialview from "./assets/aerialview.jpg";
import mastHeadImg from "./assets/masthead.jpg";
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
  Curabitur vitae augue velit. Pellentesque ac tortor at ligula posuere euismod ut id elit.`;
  return (
    <div className="App">
      <ProgressBar />
      <LandingPage imageSrc={landingGif} />
      <TextSection
        text={defaultText}
        backgroundImage={singaporeImg}
      />
      {/* 
      We're appending a unique `instance` query parameter to the `imageSrc` prop for each instance of the `BasePanolens` component. 
      This will cause the browser to treat each image URL as a separate resource, even if they point to the same image file. 
      This should allow both instances of the `BasePanolens` component to load and display the image correctly.
      */}
      {/* <BasePanolens
        imageSrc={`${pic}?instance=1`}
        container=".image-container-1"
      />
      <BasePanolens
        imageSrc={`${pic2}?`}
        overlaySrc={googleImg}
        container=".image-container-2"
      />
      <CustomPanolens
        imageSrc={`${pic}?instance=2`}
        overlaySrc={googleImg}
        overlayText={defaultText}
        container=".image-container-3"
        viewerOptions={{
          autoRotate: true,
          cameraFov: 120,
          autoRotateSpeed: 1.5,
        }}
        textBoxOptions={{
          position: "absolute",
          bottom: 50,
          right: 50,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <StickyCaptionImage
        id="image1"
        imageSrc={templateGif}
        caption={defaultText}
      />
      <VideoPlayer videoSrc={animatedVideo} />
      <StickyCaptionImage
        id="image2"
        imageSrc={mastHeadImg}
        caption={defaultText}
      />

      <StaticPhotoWithText imageSrc={aerialview} overlayText={defaultText} />
      <StaticPhotoWithSideCaptions imageSrc={mastHeadImg} caption={defaultText} /> */}
      <ScrollRotatingPanoramicImage imageSrc={pic} container=".image-container-4" />
      <ScrollRotatingPanoramicImage imageSrc={pic2} container=".image-container-5" />
      {/* <Element name="scrollContainer" className="scroll-container">
        <section className="intro-section" style={{ backgroundImage: `url(${aerialview})` }}>
          <p>Welcome to the virtual site visit</p>
        </section>
        <VideoScroll videoSrc={animatedVideo} srcMap={miniMap} />
      </Element> */}
      <LottieWrapper
        animationData={Success}
        message="Congratulations on completing the tour!"
      />
    </div>
  );
}

export default App;
