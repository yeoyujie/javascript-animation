import './App.css';
import VideoScroll from './components/scroll/VideoScroll';
import ProgressBar from './components/progressbar/progressbar';
import aerialview from './assets/aerialview.jpg';
import masthead from './assets/masthead.jpg';
import animatedVideo from './assets/video.mp4'
import mapImage from './assets/cleantech3.jpg';

function App() {
  return (
    <div className="App">
      <ProgressBar />
      <div className="background-image" style={{ backgroundImage: `url(${aerialview})` }}>
        <p>Description for image 1</p>
      </div>
      <VideoScroll videoSrc={animatedVideo} srcMap={mapImage}/>
      <div className="background-image" style={{ backgroundImage: `url(${masthead})` }}>
        <p>Description for image 2</p>
      </div>
    </div>
  );
}

export default App;
