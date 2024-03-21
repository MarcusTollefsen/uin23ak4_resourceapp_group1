import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => (
  <body>
  <nav>
    <button className="knapp"><Link to="/html">HTML</Link></button>
    <button className="knapp"><Link to="/css">CSS</Link></button>
    <button className="knapp"><Link to="/javascript">JavaScript</Link></button>
    <button className="knapp"><Link to="/react">React</Link></button>
    <button className="knapp"><Link to="/sanity">Sanity</Link></button>
  </nav>
  </body>
);

export default Navigation;
