import React, { useContext, useEffect } from 'react';
import './JobDetails.css';
import Header from '../Header/header';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import { Context } from '../../utilities/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const JobDetails = () => {
    const [context, setContext] = useContext(Context);

    const jobDetail = useLoaderData();
    const {id, jobTitle, jobDescription, jobResponsibility, educationalRequirement, experience, address, location, salary, contactInfo} = jobDetail;
    
    // console.log(jobDetail);

    const handleAddToCart = ()=>{
        addToDb(id);
    }
    
    useEffect(()=>{
        setContext("Jobs Details");
    },[]);

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
                            <p><img className='currency-icon' src="/images/currency_icon.svg" alt="" /><b>Salary: </b>{salary}</p>
                            <p><img className='currency-icon' src="/images/job-title.svg" alt="" /> <b>Job Title: </b>{jobTitle}</p>
                            <h3 className='contact-info'>Contact Information</h3>
                            <hr />
                            <p><span className='card-icon'><FontAwesomeIcon icon={faPhoneAlt}/></span><b>Phone: </b> {contactInfo.phone}</p>
                            <p><span className='card-icon'><FontAwesomeIcon icon={faEnvelope}/></span><b>Email: </b>{contactInfo.email}</p>
                            <p><span className='card-icon'><FontAwesomeIcon icon={faLocationDot} /></span><b>Address: </b>{`${address}, ${location}`}</p>
                        </div>
                        <button onClick={handleAddToCart} className='btn-primary btn'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;