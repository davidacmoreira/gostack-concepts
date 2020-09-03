import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import rocketseatImg from './assets/rocketseat.png';

import Header from './components/Header';

import { sum } from './sum';

function App() {
  const [pages, setPages] = useState(['Projects', 'Login']);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  function handleAddPage() {
    setPages([...pages, `Page ${sum(3, Date.now())}`]);
  }

  return (
    <>
      <img width={100} src={rocketseatImg} />

      <Header title="Homepage">
        <ul>
          {pages.map(page => <li key={page}>{page}</li>)}
        </ul>
      </Header>

      <button type="button" onClick={handleAddPage}>Add Page</button>

      <Header title="Projects">
        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
      </Header>
    </>
  );
}

export default App;
