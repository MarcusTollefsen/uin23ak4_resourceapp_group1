import React from 'react';
import Resources from '../components/Resources';
import '../App.css';

export default function SanityPage () {
  return (
    <div className='tab'>
      <h2>Sanity</h2>
      <Resources category="headless-cms" />
    </div>
  );
};

