import './App.css';
import VideoScroll from './VideoScroll';
import aerialview from './assets/aerialview.jpg';
import masthead from './assets/masthead.jpg';

function App() {
  return (
    <div className="App">
      <div className="background-image" style={{ backgroundImage: `url(${aerialview})` }}>
        <p>Description for image 1</p>
      </div>
      <VideoScroll />
      <div className="background-image" style={{ backgroundImage: `url(${masthead})` }}>
        <p>Description for image 2</p>
      </div>
    </div>
  );
}

export default App;
