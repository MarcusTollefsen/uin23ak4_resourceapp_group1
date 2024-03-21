import React from 'react';
import { resources } from '../assets/ressurser';

const Resources = ({ category }) => {
  const filteredResources = resources ? resources.filter(resource => resource.category === category) : [];


  return (
    <div>
      <h2>{category.toUpperCase()} Ressurser</h2>
      <ul>
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
