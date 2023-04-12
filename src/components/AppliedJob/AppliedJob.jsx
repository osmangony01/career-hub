import React from 'react';
import './AppliedJob.css';
import { Link } from 'react-router-dom';

const AppliedJob = ({ appliedJob }) => {
    const { id, jobTitle, jobCompany, companyImgLogo, jobType, location, salary } = appliedJob;

    return (
        <div className='applied-job-card'>
            <div className='applied-job-details'>
                <div className='company-img-area'>
                    <img src={companyImgLogo} className='company-img' alt="" />
                </div>
                <div className='job-info'>
                    <p className='job-title'>{jobTitle}</p>
                    <p>{jobCompany}</p>
                    <p>
                        <button className='btn-job-type'>{jobType[0]}</button>
                        <button className='btn-job-type'>{jobType[1]}</button>
                    </p>
                    <p className='loc-salary-info'>
                        <span className='location'>
                            <img src="/images/location-icon.svg" className='location-icon' alt="" />
                            {location}
                        </span>
                        <span className='salary'>
                            <img src="/images/currency_icon.svg" className='currency-icon' alt="" />
                            Salary: {salary}
                        </span>
                    </p></div>
            </div>
            <div>
                <Link to={`/job-details/${id}`}><button className='btn-view-details'>View Details</button></Link>
            </div>

        </div>

    );
};

export default AppliedJob;