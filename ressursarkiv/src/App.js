import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resources from './components//Resources';
import Header from './components/header';
import './styles/main.scss';
function App() {
  return (
    <>
    <Header/>
    <Router>
      <div className='navi'>
        <Routes>
          <Route path="/" element={<Resources category="html"/>} />
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/sanity" element={<Resources category="headless-cms" />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
