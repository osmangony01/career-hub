import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/header';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import './AppliedJobs.css';
import { Context } from '../../utilities/Context';
import Select, { components } from "react-select";

const Control = ({ children, ...props }) => (
    <components.Control {...props}>
        {children}
    </components.Control>
);

const AppliedJobs = () => {
    const [context, setContext] = useContext(Context);
    const appliedAllJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState(appliedAllJobs);

    useEffect(() => {
        setContext("Applied Jobs");
    }, []);

    const handleChange = (selected) => {
        const selectedValue = selected.value;
        let selectedAppliedJobs = appliedAllJobs.filter(job => job.jobType[0] == selectedValue || job.jobType[1] == selectedValue);
        setAppliedJobs(selectedAppliedJobs);
    }

    const options = [
        { value: "Full-time", label: "Full-time" },
        { value: "Part-time", label: "Part-time" },
        { value: "Onsite", label: "Onsite" },
        { value: "Remote", label: "Remote" },
    ];

    return (
        <div>
            <>
                <Header />
            </>
            <div className='change-layout'>
                <div className='applied-jobs'>
                    <div className='filter-option'>
                        <Select
                            onChange={handleChange}
                            components={{ Control }}
                            options={options}
                        />
                    </div>
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