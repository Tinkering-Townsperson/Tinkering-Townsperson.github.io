import React, { useState } from 'react';
import "terminal.css";
import './App.css';
import './ContentPane.css';
import { PROJECTS } from './data/projects.js';
import { HACKATHONS } from './data/hackathons.js';

function ProjectItem(props) {
  return (
    <a href={props.repo} className='project-item-link' target='_blank' rel='noreferrer'>
      <li className='project-item terminal-card'>
        <header>{props.name}</header>
        <div>
          <p>{props.description}</p>
          <sub className='date'>Created {props.creation}</sub>
        </div>
      </li>
    </a>
  );
}

function HackathonItem(props) {
  return (
    <div className='hackathon-item terminal-card'>
      <header><a href={props.site} className='link' target='_blank' rel='noreferrer'>{props.name}</a></header>
      <div>
        <p><strong>Date:</strong> {props.date}</p>
        <p><strong>Location:</strong> {props.location}</p>
        <p><strong>Project made:</strong> <a href={props.project.repo} className='link' target='_blank' rel='noreferrer'>{props.project.name}</a></p>
        <p><strong>Project description:</strong> {props.project.description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <h2 className='heading'>Projects</h2>
      <p>Here are a few of my open-source projects. You can find all of them on <a href="https://github.com/Tinkering-Townsperson" className='link' target='_blank' rel='noreferrer'>my GitHub profile</a>.</p>
      <ul className='project-list'>
        {PROJECTS.map((project) => (
          <ProjectItem name={project.name} repo={project.repo} description={project.description} tags={project.tags} creation={project.creation} />
        ))}
      </ul>
    </>
  );
}

function Hackathons() {
  return (
    <>
      <h2 className='heading'>Hackathons</h2>
      <p>Here is a timeline of all the Hackathons I've participated in.</p>
      <div className='terminal-timeline'>
        {HACKATHONS.map((hackathon) => (
          <HackathonItem name={hackathon.name} site={hackathon.site} date={hackathon.date} location={hackathon.location} project={hackathon.project} />
        ))}
      </div>
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

function Achievements() {
  return (
    <>
      <h2 className='heading'>Achievements</h2>
      <p>These are some things I'm proud of.</p>
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
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveComponent('achievements');
          }}
          className={`link-button ${activeComponent === 'achievements' ? 'active' : ''}`}
        >
          Achievements
        </a>
      </div>
      <div className="content-pane">{activeComponent === 'projects' ? <Projects /> : activeComponent === 'hackathons' ? <Hackathons /> : activeComponent === 'stack' ? <Stack /> : activeComponent === 'achievements' ? <Achievements /> : 7}</div>
    </div>
  );
}

export default ContentPane;
