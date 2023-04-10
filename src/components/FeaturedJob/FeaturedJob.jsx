import React from 'react';
import './FeaturedJob.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob }) => {

    const {id, jobTitle, jobCompany, companyImgLogo, jobType, location, salary } = featuredJob;

    return (
        <div className='job-card'>
            <img src={companyImgLogo} className='logo' alt="" />
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
                    <img src="/images/currency_icon.svg"  className='currency-icon' alt="" />
                    Salary: {salary}
                </span>
            </p>
            <div>
                <Link to={`/job-details/${id}`}><button className='btn-view-details'>View Details</button></Link>
            </div>
            
        </div>
    );
};

export default FeaturedJob;