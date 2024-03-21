import React from 'react';
import Resources from '../components/Resources';
import '../App.css';

export default function CssPage () {
  return (
    <div className='tab'>
      <h2>Css</h2>
      <Resources category="css" />
    </div>
  );
};