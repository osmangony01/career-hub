import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {

    const [jobCategories, setJobCategories] = useState([]);
    const featuredJobs = useLoaderData();


    useEffect(() => {
        fetch('/src/utilities/job-categories.json')
            .then(res => res.json())
            .then(data => setJobCategories(data))
    }, [])

    console.log(jobCategories);
    console.log(featuredJobs);

    return (
        <div>
            <div className='jobs'>
                <h1 className='jobs-title'>Job Category List</h1>
                <p className='jobs-info'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='category-card'>
                    {
                        jobCategories.map( category =>
                            <JobCategory
                                category={category}
                                key={category.id}
                            />
                        )
                    }
                </div>
            </div>
            <div className='featured-jobs'>
                <h1 className='jobs-title'>Featured Jobs</h1>
                <p className='jobs-info'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='featured-card'>
                    {
                        featuredJobs.map( featuredJob => 
                            <FeaturedJob 
                                featuredJob={featuredJob}
                                key={featuredJob.id}
                            />
                            )
                    }
                </div>
               <dir className="see-all-btn"> 
               <button className='btn-primary'>Sell All Jobs</button>
               </dir>
            </div>
          
        </div>
    );
};

export default Home;