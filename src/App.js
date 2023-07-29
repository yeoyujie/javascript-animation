import VideoScroll from "./components/VideoScroll";
import ProgressBar from "./components/ProgressBar";
import LandingPage from "./components/LandingPage";
import ExpandableText from "./components/ExpandableText";

import BasePanolens from "./components/BasePanolens";
import PanolensViewer from "./components/PanolensViewer";
import CustomPanolens from "./components/CustomPanolens";

import FullWidthPhotoWithText from "./components/FullWidthPhotoWithText";

import LottieWrapper from "./components/LottieWrapper";

import animatedVideo from "./assets/video.mp4";

import aerialview from "./assets/aerialview.jpg";
import miniMap from "./assets/sg.svg";
import Success from "./assets/success.json";

import pic from "./assets/panorama/panel1.jpeg";
import pic2 from "./assets/panorama/pic3.jpg";

import landingImg from "./assets/landing.jpg";
import landingGif from "./assets/landing.gif";

import googleImg from "./assets/google.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ProgressBar />
      <LandingPage imageSrc={landingGif} />
      <ExpandableText
        text="This is some example text that will be displayed in the ExpandableText component."
        backgroundImage="https://picsum.photos/1080/800"
      />
      {/* 
      We're appending a unique `instance` query parameter to the `imageSrc` prop for each instance of the `BasePanolens` component. 
      This will cause the browser to treat each image URL as a separate resource, even if they point to the same image file. 
      This should allow both instances of the `BasePanolens` component to load and display the image correctly.
      */}
      <BasePanolens
        imageSrc={`${pic}?instance=1`}
        container=".image-container-1"
      />
      <BasePanolens
        imageSrc={`${pic}?instance=2`}
        overlaySrc={googleImg}
        container=".image-container-2"
      />
      <CustomPanolens
        imageSrc={`${pic}?instance=3`}
        overlaySrc={googleImg}
        overlayText={`This is some overlay text This is some overlay textT his is some overlay text.
        This is some overlay textThis is some overlay text`}
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
      <FullWidthPhotoWithText
        imageSrc={aerialview}
        overlayText={`This is some overlay text This is some overlay textT his is some overlay text.
        This is some overlay textThis is some overlay text`}
      />
      {/* <PanolensViewer imageSrc={pic} container=".image-container-1" />
      <PanolensViewer imageSrc={pic2} container=".image-container-2" /> */}
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
