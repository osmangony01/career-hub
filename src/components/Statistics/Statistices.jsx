import React, { useContext, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from "recharts";
import Header from '../Header/header';
import './Statistics.css';
import { Context } from '../../utilities/Context';

const Statistics = () => {
    const [context, setContext] = useContext(Context);

    useEffect(() => {
        setContext("Statistics");
    }, []);

    const data = [
        { name: "A1", "Obtain Mark": 57, },
        { name: "A2", "Obtain Mark": 60, },
        { name: "A3", "Obtain Mark": 60, },
        { name: "A4", "Obtain Mark": 56, },
        { name: "A5", "Obtain Mark": 60, },
        { name: "A6", "Obtain Mark": 60, },
        { name: "A7", "Obtain Mark": 60, },
        { name: "A8", "Obtain Mark": 60, }
    ];

    return (
        <div>
            <Header></Header>
            <div className='change-layout'>
                <div className='statistics-info'>
                    <h3 className='statistics-title'>Assignment Analytics</h3>
                    <div className='charts'>
                        <ResponsiveContainer>
                            <AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 30}}>
                                <defs>
                                    <linearGradient id="marksColor" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name">
                                    <Label value="numbers of assignment" offset={-20} position="insideBottom" />
                                </XAxis>
                                <YAxis label={{ value: 'marks', angle: -90, position: 'insideLeft' }} />
                                <Tooltip />
                                <Area type="monotone" dataKey="Obtain Mark" stroke="#8884d8" fill="url(#marksColor)" />
                            </AreaChart>
                        </ResponsiveContainer>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;