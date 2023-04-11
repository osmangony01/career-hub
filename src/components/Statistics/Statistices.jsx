import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label } from "recharts";
import Header from '../Header/header';
import './Statistics.css';

const Statistics = () => {
    const data = [
        { assignment: "A1", "Obtain Mark": 57, },
        { assignment: "A2", "Obtain Mark": 60, },
        { assignment: "A3", "Obtain Mark": 60, },
        { assignment: "A4", "Obtain Mark": 56, },
        { assignment: "A5", "Obtain Mark": 60, },
        { assignment: "A6", "Obtain Mark": 60, },
        { assignment: "A7", "Obtain Mark": 60, },
        { assignment: "A8", "Obtain Mark": 60, }
    ];

    return (
        <div>
            <Header></Header>
            <div className='change-layout'>
                <div className='statistics-info'>
                    <h3 className='statistics-title'>Assignment Analytics</h3>
                    <div className='charts'>
                        <AreaChart width={700} height={310} data={data} >
                            <defs>
                                <linearGradient id="marksColor" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            {/* <XAxis dataKey="assignment" />
                            <YAxis /> */}
                            <XAxis dataKey="assignment">
                                <Label value="numbers of assignment" offset={-2} position="insideBottom" />
                            </XAxis>
                            <YAxis label={{ value: 'marks', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Area type="monotone" dataKey="Obtain Mark" stroke="#8884d8" fill="url(#marksColor)" />
                        </AreaChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;