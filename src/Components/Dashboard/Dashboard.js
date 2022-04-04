import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div>
            <div>
                <h2>this is LineChart</h2>
                <MyLineChart></MyLineChart>
            </div>
            <br />
            <div>
                <h2>This is Area Chart</h2>
                <MyAreaChart></MyAreaChart>
            </div>
        </div>
    );
};

export default Dashboard;