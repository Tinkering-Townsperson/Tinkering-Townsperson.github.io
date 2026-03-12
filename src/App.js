import ContentPane from "./ContentPane.js";
import { Octokit } from "@octokit/core";
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
      <Footer />
    </div>
  );
}

function Footer(){
  return (
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
        <a href="https://www.linkedin.com/in/paya-maroufi-61847a3b6/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin" aria-label="LinkedIn logo" />
        </a>
      </div>
      <p className="copyright">&copy; 2025 Paya Maroufi [<a href="https://github.com/Tinkering-Townsperson/Tinkering-Townsperson.github.io" className="link" target="_blank" rel="noreferrer">repo</a> - commit <a href={latestCommit.html_url} className="underline hover:decoration-wavy" target="_blank" rel="noopenner noreferrer">{latestCommit.hash}</a> on {latestCommit.date}]</p>
    </footer>
  )
}

const octokit = new Octokit();

async function getLatestCommit() {
  const res = await octokit.request(
    "GET /repos/Tinkering-Townsperson/Tinkering-Townsperson.github.io/commits",
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  const commitDate = new Date(res.data[0].commit.author.date);
  const optionsMonthDayYear = { year: 'numeric', month: 'long', day: 'numeric' };

  return {
    hash: res.data[0].sha.slice(0, 7),
    html_url: res.data[0].html_url,
    date: commitDate.toLocaleDateString("en-US", optionsMonthDayYear),
  };
}

const latestCommit = await getLatestCommit();

export default App;

