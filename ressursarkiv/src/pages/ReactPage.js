import React from 'react';
import Resources from '../components/Resources';
import '../App.css';

export default function ReactPage () {
  return (
    <div className='tab'>
      <h2>React</h2>
      <Resources category="react" />
    </div>
  );
};

