import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resources from './components//Resources';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Routes>
          <Route path="/" element={<Resources category="HomePage"/>} />
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/sanity" element={<Resources category="headless-cms" />} />
        </Routes>
      </nav>
    </Router>
  );
}

export default App;
