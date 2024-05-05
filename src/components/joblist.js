import React, { useState } from 'react';
import JobCard from './jobcard.js';

const jobsData = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    description: 'Develop, test, and maintain software applications.',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate LLC',
    location: 'New York, NY',
    description: 'Lead product development and ensure customer satisfaction.',
  },
  // Add more job data as needed
];

const JobList = () => {
  const [jobs, setJobs] = useState(jobsData);

  const handleApply = (job) => {
    alert(`Applying for: ${job.title} at ${job.company}`);
    // Additional application logic can go here
  };

  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onApply={handleApply} />
      ))}
    </div>
  );
};

export default JobList;
