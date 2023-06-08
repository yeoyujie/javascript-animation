import './App.css';
import VideoScroll from './components/VideoScroll';
import ProgressBar from './components/ProgressBar';
import aerialview from './assets/aerialview.jpg';
import animatedVideo from './assets/video.mp4'
import miniMap from './assets/sg.svg';
import Success from './assets/success.json';
import LottieWrapper from './components/LottieWrapper';
import { Element, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';

function App() {

  const scrollToTopButton = (
    <button className="scroll-to-top-button" onClick={scroll.scrollToTop}>
      Go to Top
    </button>
  );

  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <Link to="scrollContainer" smooth={true} duration={500}>
              To video
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <Element name="scrollContainer" className="scroll-container">
        {/* Your content goes here */}
        <ProgressBar />
        <section className="intro-section" style={{ backgroundImage: `url(${aerialview})` }}>
          <p>Welcome to the virtual site visit</p>
        </section>
        <VideoScroll videoSrc={animatedVideo} srcMap={miniMap} />
        <LottieWrapper animationData={Success} message="Congratulations on completing the tour!" scrollToTopButton={scrollToTopButton} />
      </Element>
    </div>
  );
}


export default App;
