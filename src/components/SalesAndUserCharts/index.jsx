"use client"
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const SalesAndUsersCharts = () => {

    const [isActiveChart, setIsActiveChart] = useState(0)

    const salesData = [
        {
            name: 'JAN',
            sales: 4000
        },
        {
            name: 'FEB',
            sales: 300
        },
        {
            name: 'MAR',
            sales: 2000
        },
        {
            name: 'APR',
            sales: 600
        },
        {
            name: 'MAY',
            sales: 400
        },
        {
            name: 'JUN',
            sales: 8000
        },
        {
            name: 'JUL',
            sales: 1200
        },
        {
            name: 'AUG',
            sales: 4000
        },
        {
            name: 'SEP',
            sales: 6000
        },
        {
            name: 'OCT',
            sales: 1800
        },
        {
            name: 'NOV',
            sales: 900
        },
        {
            name: 'DEC',
            sales: 1000
        },

    ]

     const usersData = [
        {
            name: 'JAN',
            users: 2330
        },
        {
            name: 'FEB',
            users: 2382
        },
        {
            name: 'MAR',
            users: 300
        },
        {
            name: 'APR',
            users: 1700
        },
        {
            name: 'MAY',
            users: 400
        },
        {
            name: 'JUN',
            users: 1000
        },
        {
            name: 'JUL',
            users: 1200
        },
        {
            name: 'AUG',
            users: 4000
        },
        {
            name: 'SEP',
            users: 9000
        },
        {
            name: 'OCT',
            users: 1500
        },
        {
            name: 'NOV',
            users: 900
        },
        {
            name: 'DEC',
            users: 1000
        },

    ]

    const handleChart = (chart) => {
     setIsActiveChart(chart)
    }
    return (
        <div className='bg-white p-5 rounded-md shadow-md mt-5'>
            <div className='flex items-center justify-between'> 
                 <h2 className='text-[18px] text-gray-700 font-[600]'>Total Users & Total Sales</h2>
                 <div className='flex items-center gap-2'>
                 <Button variant='text' className='text-primary! capitalize! font-bold!' onClick={() => handleChart(0)}>Total Sales</Button>
                  <Button variant='text' className='text-blue-500! capitalize! font-bold!' onClick={() => handleChart(1)}>Total Users</Button>
                 </div>

            </div>
            {
                isActiveChart === 0 && 
                 <div className='w-full'>
                <AreaChart
                    style={{ width: "100%", maxHeight: "70vh", maxHeight: "70vh", aspectRatio: 1.618 }}
                    responsive
                    data={salesData}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{fontSize: 12, fill: "#ccc", fontWeight: 500}}/>
                    <YAxis width="auto" tick={{fontSize: 12, fill: "#ccc", fontWeight: 500}} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="sales"
                        stroke="#000"
                        fill="#02B290"
                    />
                </AreaChart>


            </div>
            }

             {
                isActiveChart === 1 && 
                 <div className='w-full'>
                <AreaChart
                    style={{ width: "100%", maxHeight: "70vh", maxHeight: "70vh", aspectRatio: 1.618 }}
                    responsive
                    data={usersData}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{fontSize: 12, fill: "#ccc", fontWeight: 500}}/>
                    <YAxis width="auto" tick={{fontSize: 12, fill: "#ccc", fontWeight: 500}} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="users"
                        stroke="#000"
                        fill="#02B290"
                    />
                </AreaChart>


            </div>
            }

           

        </div>
    )
}

export default SalesAndUsersCharts
