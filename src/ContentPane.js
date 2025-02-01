import React, { useState } from 'react';
import "terminal.css";
import './App.css';
import './ContentPane.css';


function ProjectItem(url, name) {
  console.log(url);
  return (
    <li>
      <a href={url} target='_blank' rel='noreferrer'>{name}</a>
    </li>
  );
}

function Projects() {
  return (
    <>
      <h2 className='heading'>Projects</h2>
      <p>Here are a few of my open-source projects. You can find all of them on <a href="https://github.com/Tinkering-Townsperson">my GitHub profile</a>.</p>
      <p>Content coming soon</p>

    </>
  );
}

function Hackathons() {
  return (
    <>
      <h2 className='heading'>Hackathons</h2>
      <p>Here is a list of all the Hackathons I've participated in.</p>
      <p>Content coming soon</p>
    </>
  );
}

function Stack() {
  return (
    <>
      <h2 className='heading'>Stack</h2>
      <p>This is my primary tech stack.</p>
      <p>Content coming soon</p>
      </>
  );
}

function ContentPane() {
  const [activeComponent, setActiveComponent] = useState('projects');
  return (
    <div className="ContentPane">
      <div className="links">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveComponent('projects');
          }}
          className={`link-button ${activeComponent === 'projects' ? 'active' : ''}`}
        >
          Projects
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveComponent('hackathons'); // Changed to hackathons
          }}
          className={`link-button ${activeComponent === 'hackathons' ? 'active' : ''}`}
        >
          Hackathons
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveComponent('stack');
          }}
          className={`link-button ${activeComponent === 'stack' ? 'active' : ''}`}
        >
          Stack
        </a>
      </div>
      <div className="content-pane">{activeComponent === 'projects' ? <Projects /> : activeComponent === 'hackathons' ? <Hackathons /> : activeComponent === 'stack' ? <Stack /> : 7}</div>
    </div>
  );
}

export default ContentPane;
