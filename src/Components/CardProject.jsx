import React from 'react';
import '../Style/CardProject.css';
import PropTypes from 'prop-types';

function CardProject({ data }) {
  return (
    <a
      href={data.urlProject}
      className="card"
      target="_blank"
      rel="noreferrer"
    >
      <img src={data.img} alt={data.nameProject} className="img-project" />
      <div className="content">
        <h2>{data.id}</h2>
        <h3>{data.nameProject}</h3>
        <p>{data.description}</p>
      </div>
    </a>
  );
}

CardProject.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    urlProject: PropTypes.string,
    nameProject: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default CardProject;
