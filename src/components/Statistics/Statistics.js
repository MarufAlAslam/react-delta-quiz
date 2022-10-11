import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Bar, Line, ComposedChart } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const loaderData = useLoaderData()
    let data = [];
    // eslint-disable-next-line array-callback-return
    loaderData.data.map(apiData => { data.push({ name: apiData.name, total: apiData.total }) })

    return (
        <div className='py-5'>
            <div className='container'>
                <div className='text-center mb-5'>
                    <h2 className='purple'>Statistics</h2>
                    <p className='mb-1'>Based on total available no. of quizes</p>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#413ea0" />
                        <Line type="monotone" dataKey="total" stroke="red" activeDot={{ r: 15 }} strokeWidth={5} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;