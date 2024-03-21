import React from 'react';
import Resources from '../components/Resources';
import '../App.css';

export default function HtmlPage () {
  return (
    <div className='tab'>
      <h2>HTML</h2>
      <Resources category="html" />
    </div>
  );
};


