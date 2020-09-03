import React, { useState } from 'react';

import Header from './components/Header';

import { sum } from './sum';

function App() {
  const [projects, setProjects] = useState(['Project 123', 'Project 456', 'Project 789']);

  function handleAddProject() {
    setProjects([...projects, `Project ${sum(3, Date.now())}`]);
  }

  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>

      <Header title="Projects">
        <ul>
          {projects.map(project => <li key={project}>{project}</li>)}
        </ul>
      </Header>

      <button type="button" onClick={handleAddProject}>Add project</button>
    </>
  );
}

export default App;
