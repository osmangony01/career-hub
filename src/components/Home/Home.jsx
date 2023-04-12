import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    const [jobCategories, setJobCategories] = useState([]);
    const allFeaturedJobs = useLoaderData();
    const takeFourData = allFeaturedJobs.slice(0, 4)
    const [featuredJobs, setFeaturedJobs] = useState(takeFourData);
    const [isSeeBtn, setIsSeeBtn] = useState(true);

    useEffect(() => {
        fetch('/job-categories.json')
            .then(res => res.json())
            .then(data => setJobCategories(data))
    }, [])

    const handleSeeBtn = () => {
        setFeaturedJobs(allFeaturedJobs);
        setIsSeeBtn(false);
    }

    return (
        <div>
            <div >
                <div className='header'>
                    <Navbar />
                    <div className='header-info'>
                        <div className='info-details'>
                            <h2>One Step Closer To Your <br /><span className='dream-job'>Dream Job</span></h2>
                            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                            <button className='btn-primary'>Get Started</button>
                        </div>
                        <div>
                            <img src="/images/job-interview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='change-layout'>
                <div className='jobs'>
                    <h1 className='jobs-title'>Job Category List</h1>
                    <p className='jobs-info'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='category-card'>
                        {
                            jobCategories.map(category =>
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
                            featuredJobs.map(featuredJob =>
                                <FeaturedJob
                                    featuredJob={featuredJob}
                                    key={featuredJob.id}
                                />
                            )
                        }
                    </div>
                    <dir className="see-all-btn">
                        {isSeeBtn && <button className='btn-primary' onClick={handleSeeBtn}>Sell All Jobs</button>}
                    </dir>
                </div>
            </div>
        </div>
    );
};

export default Home;