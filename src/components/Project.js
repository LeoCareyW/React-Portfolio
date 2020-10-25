import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({name, language, description}) => {
return (
      <div className="project">
        <p>{name}</p>
        <p>{language}</p>
        <p>{description}</p>
      </div>
    );
}

export default Project
