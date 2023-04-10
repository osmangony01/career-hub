import React from 'react';
import './JobCategory.css';

const JobCategory = ({ category }) => {
    const { img, categoryName, availableAmount } = category;

    return (
        <div className='card'>
            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <p className='card-title'>{categoryName}</p>
            <p>{availableAmount}</p>
        </div>
    );
};

export default JobCategory;