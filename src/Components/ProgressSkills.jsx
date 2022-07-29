import React from 'react';
import PropTypes from 'prop-types';

function ProgressSkills({ data }) {
  return (
    <div className="tamanho mt-3">
      <h3>{data.name}</h3>
      <div className="progress">
        <div
          className="progress-bar bg-info progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuemax="100"
          style={{ width: `${data.progress}%` }}
        >
          <span>{`${data.progress}%`}</span>
        </div>
      </div>
    </div>
  );
}

ProgressSkills.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    progress: PropTypes.string,
  }).isRequired,
};

export default ProgressSkills;
