import VideoScroll from "./components/VideoScroll";
import ProgressBar from "./components/ProgressBar";
import LandingPage from "./components/LandingPage";
import TextSection from "./components/TextSection";
import BasePanolens from "./components/BasePanolens";
import PanolensViewer from "./components/PanolensViewer";
import CustomPanolens from "./components/CustomPanolens";
import StaticPhotoWithText from "./components/StaticPhotoWithText";
import StickyCaptionImage from "./components/StickyCaptionImage";
import VideoPlayer from "./components/VideoPlayer";
import LottieWrapper from "./components/LottieWrapper";

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

import "./App.css";

function App() {
  const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas, libero nec tristique pellentesque, quam nibh aliquet urna, ut ornare sem leo vitae eros. Nunc porttitor ut tortor id pulvinar. Praesent nec velit lobortis, eleifend magna ut, suscipit est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras mattis urna odio, vitae feugiat mauris imperdiet non. Duis vulputate porttitor nulla, at convallis nibh maximus eget. Curabitur vitae augue velit. Pellentesque ac tortor at ligula posuere euismod ut id elit.`;
  return (
    <div className="App">
      <ProgressBar />
      <LandingPage imageSrc={landingGif} />
      <TextSection
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
        imageSrc={`${pic2}?`}
        overlaySrc={googleImg}
        container=".image-container-2"
      />
      <CustomPanolens
        imageSrc={`${pic}?instance=2`}
        overlaySrc={googleImg}
        overlayText={`This is some overlay text This is some overlay textT his is some overlay text.
        This is some overlay text. This is some overlay text`}
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
      <StickyCaptionImage imageSrc={templateGif} caption={defaultText} />
      <VideoPlayer videoSrc={animatedVideo} />
      <StickyCaptionImage imageSrc={mastHeadImg} caption={defaultText} />
      <StaticPhotoWithText imageSrc={aerialview} overlayText={defaultText} />
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
