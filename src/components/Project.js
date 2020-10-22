import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
return (
      <div className="project">
        <p>{props.name}</p>
        <p>{props.language}</p>
      </div>
    );
}

export default Project
