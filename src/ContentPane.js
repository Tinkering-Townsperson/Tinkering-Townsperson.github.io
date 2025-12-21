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
        <p><strong>Project demo:</strong> <a href={props.project.demo} className='link' target='_blank' rel='noreferrer'>{props.project.demo}</a></p>
        <p><strong>Project description:</strong> {props.project.description}</p>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <>
      <h2 className='heading'>About Me</h2>
      <p><b>Hey there!</b> I'm Paya Maroufi, a high school student living in Canada with a passion for programming, technology, and music.</p>
      <p>I'm the president of <a href="https://fraser.hackclub.com" className='link' target='_blank' rel='noreferrer'>Fraser Hack Club</a>, a student-run coding club based in Coquitlam, right outside Vancouver, BC. I love organizing <a href="https://fraser.hackclub.com/program/swirl-website-workshop" className='link' target='_blank' rel='noreferrer'>events and workshops</a> to help others learn how to code and build cool projects.</p>
      <p>In my free time, I play classical guitar, clarinet, and jazz trombone, and I occasionally compose music.</p>
      <p>I also play UNDERTALE, and it's by far my favourite game.</p>

      <h2 className='heading'>Current Endeavours</h2>
      <p>I'm currently planning/organizing <a href='https://campfire.hackclub.com/vancouver' className='link' target='_blank' rel='noreferrer'>Campfire Vancouver</a>, a game jam for high schoolers in Vancouver.</p>
    </>
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

function Music() {
  return (
    <>
      <h2 className='heading'>Music</h2>

      <p>Here are some songs I've composed.</p>
      <p>Content coming soon</p>
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

function ContentPane() {
  const [activeComponent, setActiveComponent] = useState('aboutme');
  return (
    <div className="ContentPane">
      <div className="links">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveComponent('aboutme');
          }}
          className={`link-button ${activeComponent === 'aboutme' ? 'active' : ''}`}
        >
          About Me
        </a>
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
        <a href='#'
          onClick={(e) => {
            e.preventDefault();
            setActiveComponent('music');
          }}
          className={`link-button ${activeComponent === 'music' ? 'active' : ''}`}
        >
          Music
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
      </div>
      <div className="content-pane">{activeComponent === 'aboutme' ? <AboutMe /> : activeComponent === 'projects' ? <Projects /> : activeComponent === 'music' ? <Music /> : activeComponent === 'hackathons' ? <Hackathons /> : 'If you can read this, something went wrong 🤓'}</div>
    </div>
  );
}

export default ContentPane;
