import React from 'react';
import './jobcard.css'; // CSS file for styling

const JobCard = ({ job, onApply }) => {
  const { title, company, location, description } = job;

  return (
    <div className="job-card">
      <div className="job-card-header">
        <h2>{title}</h2>
        <h4>{company}</h4>
      </div>
      <p className="job-location">Location: {location}</p>
      <p className="job-description">{description}</p>
      <button onClick={() => onApply(job)} className="apply-button">
        Apply
      </button>
    </div>
  );
};

export default JobCard;
