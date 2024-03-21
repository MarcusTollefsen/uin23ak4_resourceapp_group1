import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

const Navigation = () => (
  
  <ul className='navig'>
    <li><button className="knapp"><Link to="/html">HTML</Link></button></li>
    <li><button className="knapp"><Link to="/css">CSS</Link></button></li>
    <li><button className="knapp"><Link to="/javascript">JavaScript</Link></button></li>
    <li><button className="knapp"><Link to="/react">React</Link></button></li>
    <li><button className="knapp"><Link to="/sanity">Sanity</Link></button></li>
  </ul>
  
);

export default Navigation;
