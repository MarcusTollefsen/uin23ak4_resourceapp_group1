import React from 'react';
import { resources } from '../assets/ressurser';
import '../App.css';
import Header from './header';
import Navigation from './Navigation';

const Resources = ({ category }) => {
  const filteredResources = resources ? resources.filter(resource => resource.category === category) : [];


  return (
    <>
      <Header />
      <Navigation />

    <nav>
      <h2>{category.toUpperCase()}</h2>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </>
  );
};

export default Resources;
