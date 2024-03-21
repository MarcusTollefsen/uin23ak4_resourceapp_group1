import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => (
  <nav>
    <button><Link to="/html">HTML</Link></button>
    <button><Link to="/css">CSS</Link></button>
    <button><Link to="/javascript">JavaScript</Link></button>
    <button><Link to="/react">React</Link></button>
    <button><Link to="/sanity">Sanity</Link></button>
  </nav>
);

export default Navigation;
