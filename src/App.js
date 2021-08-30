import leedance from './leedance.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video controls autostart autoplay src={leedance} className="Video" />
        <p>
          Lee's Shit Belts
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
