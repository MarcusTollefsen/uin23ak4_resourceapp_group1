import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components//header';
import Navigation from './components/Navigation';
import Resources from './components//Resources';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/sanity" element={<Resources category="headless-cms" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
