import ContentPane from "./ContentPane.js";
import "terminal.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title terminal-prompt">Paya Maroufi</h1>
        <p className="subtitle">High School Student, Programmer, President of <a href="https://fraser.hackclub.com" className="link" target='_blank' rel="noreferrer">Fraser Hack Club</a></p>
      </header>
      <div className="main">
        <p><b>Hey there!</b> I'm a high school student living in Canada who is interested in programming and technology.</p>
      </div>
      <ContentPane />
      <br />
      <footer className="App-footer">
        <div className="socials">
          <a href="https://github.com/Tinkering-Townsperson" target="_blank" rel="noreferrer">
            <i className="fab fa-github" aria-label="GitHub logo" />
          </a>
          <a href="https://www.youtube.com/@afternooncodes" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube" aria-label="YouTube logo" />
          </a>
        </div>
        <p className="copyright">© 2025 Paya Maroufi</p>
      </footer>
    </div>
  );
}

export default App;
