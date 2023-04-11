import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/header';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import './AppliedJobs.css';
import { Context } from '../../utilities/Context';

const AppliedJobs = () => {
    const [context, setContext] = useContext(Context);

    const appliedAllJobs = useLoaderData();
    const [appliedJobs , setAppliedJobs] = useState(appliedAllJobs);

    useEffect(()=>{
        setContext("Applied Jobs");
    },[]);
    
    console.log(appliedJobs);
    return (
        <div>
            <>
                <Header />
            </>
            <div className='change-layout'>
                <div className='applied-jobs'>
                    {
                        appliedJobs.map(appliedJob =>
                            <AppliedJob
                                key={appliedJob.id} appliedJob={appliedJob}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;