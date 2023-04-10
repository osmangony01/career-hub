import React from 'react';
import './JobDetails.css';
import Header from '../Header/header';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const jobDetail = useLoaderData();
    const {id, jobTitle, jobDescription, jobResponsibility, educationalRequirement, experience, address, location, salary, contactInfo} = jobDetail;
    
    console.log(jobDetail);

    const handleAddToCart = ()=>{
        addToDb(id);
    }
    
    return (
        <div>
            <>
                <Header></Header>
            </>

            <div className='change-layout'>
                <div className='job-details'>
                    <div>
                        <p><b>Job Description:</b> {jobDescription}</p>
                        <p><b>Job Responsibility:</b> {jobResponsibility.join(', ')}</p>
                        <h3>Educational Requirements:</h3>
                        <p>{educationalRequirement}</p>
                        <h3>Experiences:</h3>
                        <p>{experience}</p>
                    </div>
                    <div>
                        <div className='job-details-card'>
                            <h3>Job Details</h3>
                            <hr />
                            <p><span></span><b>Salary: </b>{salary}</p>
                            <p><span></span><b>Job Title: </b>{jobTitle}</p>
                            <h3 className='contact-info'>Contact Information</h3>
                            <hr />
                            <p><b>Phone: </b> {contactInfo.phone}</p>
                            <p><b>Email: </b>{contactInfo.email}</p>
                            <p><b>Address: </b>{`${address}, ${location}`}</p>
                        </div>
                        <button onClick={handleAddToCart} className='btn-primary btn'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;