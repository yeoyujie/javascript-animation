import './App.css';
import VideoScroll from './components/VideoScroll';
import ProgressBar from './components/ProgressBar';
import aerialview from './assets/aerialview.jpg';
import animatedVideo from './assets/video.mp4'
import miniMap from './assets/sg.svg';
import Success from './assets/success.json';
import LottieWrapper from './components/LottieWrapper';
import { Element, animateScroll as scroll } from 'react-scroll';
import LandingPage from './components/LandingPage';
import PanolensViewer from './components/PanolensViewer';

import pic from './assets/panorama/panel1.jpeg';
import pic2 from './assets/panorama/pic3.jpg';

import landingImg from './assets/landing.jpg';
function App() {

  return (
    <div className="App">
      <LandingPage imageSrc={landingImg} />
      <div style={{ height: 1000, backgroundColor: 'black' }} />
      <PanolensViewer imageSrc={pic} container=".image-container-1" />
      <PanolensViewer imageSrc={pic2} container=".image-container-2" />
      <div style={{ height: 800 }} />
      <div style={{ height: 800, backgroundColor: 'black' }} />
      <div style={{ height: 800 }} />
      {/* <PanolensViewer imageSrc={pic2} container=".image-container-2" /> */}
      {/* <Element name="scrollContainer" className="scroll-container">
        <ProgressBar />
        <section className="intro-section" style={{ backgroundImage: `url(${aerialview})` }}>
          <p>Welcome to the virtual site visit</p>
        </section>
        <VideoScroll videoSrc={animatedVideo} srcMap={miniMap} />
        <LottieWrapper animationData={Success} message="Congratulations on completing the tour!" scrollToTopButton={scrollToTopButton} />
      </Element> */}
    </div>
  );
}


export default App;
