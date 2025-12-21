import ContentPane from "./ContentPane.js";
import "terminal.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title terminal-prompt">Paya Maroufi</h1>
        <p className="subtitle">High School Student, Programmer, Musician, President of <a href="https://fraser.hackclub.com" className="link" target='_blank' rel="noreferrer">Fraser Hack Club</a></p>
      </header>
      <ContentPane />
      <br />
      <footer className="App-footer">
        <div className="socials">
          <a href="https://github.com/Tinkering-Townsperson" target="_blank" rel="noreferrer">
            <i className="fab fa-github" aria-label="GitHub logo" />
          </a>
          <a href="https://www.youtube.com/@afternoonpm" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube" aria-label="YouTube logo" />
          </a>
          <a href="https://afternoonpm.itch.io" target="_blank" rel="noreferrer">
            <i className="fab fa-itch-io" aria-label="Itch.io logo" />
          </a>
          <a href="https://hackclub.enterprise.slack.com/team/U081MDA4T24" target="_blank" rel="noreferrer">
            <i className="fab fa-slack" aria-label="Slack logo" />
          </a>
        </div>
        <p className="copyright">&copy; 2025 Paya Maroufi</p>
      </footer>
    </div>
  );
}

export default App;
