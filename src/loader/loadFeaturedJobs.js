import React from 'react';

const loadFeaturedJobs = async () => {
    const loadedJobs = await fetch('/featured-jobs.json');
    const jobs = await loadedJobs.json();
    return jobs;

};

export default loadFeaturedJobs;