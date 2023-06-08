import './App.css';
import Lottie from 'lottie-react';
import VideoScroll from './components/scroll/VideoScroll';
import ProgressBar from './components/progressbar/progressbar';
import aerialview from './assets/aerialview.jpg';
import masthead from './assets/masthead.jpg';
import animatedVideo from './assets/video.mp4'
import mapImage from './assets/cleantech3.jpg';
import miniMap from './assets/sg.svg';
import Success from './assets/success.json';
import LottieWrapper from './components/lottiewrapper/LottieWrapper';

function App() {
  return (
    <div className="App">
      <ProgressBar />
      <div className="background-image" style={{ backgroundImage: `url(${aerialview})` }}>
        <p>Description for image 1</p>
      </div>
      <VideoScroll videoSrc={animatedVideo} srcMap={miniMap} />
      <LottieWrapper animationData={Success} message="Congratulations on completing the visit!" />
    </div>
  );
}

export default App;
