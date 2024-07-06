import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useMemo } from "react";
import React, { useState } from "react";
import {
    ResponsiveContainer,
    ComposedChart,
    AreaChart,
    LineChart,
    Line,
    Area,
    PieChart,
    Pie,
    Cell,
    YAxis,
    XAxis,
    Tooltip,
} from "recharts";
import { Select, MenuItem, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// components
import mock from "@/Components/DashboardComp/mock";
import Widget from "@/Components/DashboardComp/Widget";
import PageTitle from '@/Components/PageTitle';
import { Circle } from '@mui/icons-material';
import BigStat from "@/Components/DashboardComp/BigStat";
import Table from "@/Components/DashboardComp/Table"


export default function Dashboard() {
    const { props: { auth } } = usePage(); // Use usePage to get the auth object

    const theme = useTheme();
    const data = [
        {
            monthlyData: [
                { month: 'January', revenue: 12000, expenses: 8000 },
                { month: 'February', revenue: 15000, expenses: 9000 },
                { month: 'March', revenue: 18000, expenses: 11000 },
                { month: 'April', revenue: 20000, expenses: 12000 },
                { month: 'May', revenue: 22000, expenses: 14000 },
                { month: 'June', revenue: 24000, expenses: 15000 },
                { month: 'July', revenue: 26000, expenses: 16000 },
                { month: 'August', revenue: 28000, expenses: 17000 },
                { month: 'September', revenue: 30000, expenses: 18000 },
                { month: 'October', revenue: 32000, expenses: 19000 },
                { month: 'November', revenue: 34000, expenses: 20000 },
                { month: 'December', revenue: 36000, expenses: 22000 },
            ],
        },
    ];

    const revenueExpenses = useMemo(() => {
        return (
            data &&
            data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses,
                };
            })
        );
    }, [data]);

    const PieChartData = [
        { name: "Group A", value: 400, color: "primary" },
        { name: "Group B", value: 300, color: "secondary" },
        { name: "Group C", value: 300, color: "warning" },
        { name: "Group D", value: 200, color: "success" },
    ];

    const ServerOverviewElement = ({ data, color, text }) => (
        <div className="mb-4 last:mb-0">
            <Typography
                color="textSecondary"
                className="text-sm mb-2"
            >
                {text}
            </Typography>
            <div className="h-[50px] w-full">
                <ResponsiveContainer width="99%" height={50}>
                    <AreaChart data={data}>
                        <Area
                            type="natural"
                            dataKey="value"
                            stroke={theme.palette[color].main}
                            fill={theme.palette[color].light}
                            strokeWidth={2}
                            fillOpacity={0.25}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );


    return (
        <AuthenticatedLayout
            user={auth?.user}  // Add optional chaining to prevent errors if auth is undefined
            header={
                <PageTitle title="Dashboard" button="Latest Reports" />
            }
        >
            <Head title="Dashboard" />
            <div className="pt-8 h-[calc(100vh-155px)] overflow-y-auto">
                <div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
                    <div className="p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Widget
                                title="Visits Today"
                                upperTitle
                                className="min-h-full flex flex-col"
                            >
                                <div className="flex items-center flex-grow pb-4">
                                    <Typography variant="h4" className="font-medium">
                                        12, 678
                                    </Typography>
                                    <LineChart
                                        width={55}
                                        height={30}
                                        data={[
                                            { value: 10 },
                                            { value: 15 },
                                            { value: 10 },
                                            { value: 17 },
                                            { value: 18 },
                                        ]}
                                        margin={{ left: 8 }}
                                    >
                                        <Line
                                            type="natural"
                                            dataKey="value"
                                            stroke={theme.palette.success.main}
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <Typography color="textSecondary">Registr...</Typography>
                                        <Typography variant="body1">860</Typography>
                                    </div>
                                    <div>
                                        <Typography color="textSecondary">Sign Out</Typography>
                                        <Typography variant="body1">32</Typography>
                                    </div>
                                    <div>
                                        <Typography color="textSecondary">Rate</Typography>
                                        <Typography variant="body1">3.25%</Typography>
                                    </div>
                                </div>
                            </Widget>

                            {/* Second Widget */}
                            <Widget
                                title="App Performance"
                                upperTitle
                                className="min-h-full flex flex-col"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="flex items-center mr-4">
                                        <Circle sx={{ color: 'orange', fontSize: '20px' }} />
                                        <Typography color="textSecondary" className="ml-2">
                                            Integration
                                        </Typography>
                                    </div>
                                    <div className="flex items-center">
                                        <Circle sx={{ color: 'blue', fontSize: '20px' }} />
                                        <Typography color="textSecondary" className="ml-2">
                                            SDK
                                        </Typography>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <Typography color="textSecondary" className="mb-2">
                                        Integration
                                    </Typography>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-orange-300 h-2.5 rounded-full"
                                            style={{ width: "30%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <Typography color="textSecondary" className="mb-2">
                                        SDK
                                    </Typography>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full"
                                            style={{ width: "55%" }}
                                        ></div>
                                    </div>
                                </div>
                            </Widget>
                            {/* Server Overview */}
                            <Widget
                                title="Server Overview"
                                upperTitle
                                className="bg-white rounded-lg shadow-lg"
                                bodyClass="h-full p-4"
                            >
                                <ServerOverviewElement
                                    data={getRandomData(10)}
                                    color="secondary"
                                    text="60% / 37°С / 3.3 Ghz"
                                />
                                <ServerOverviewElement
                                    data={getRandomData(10)}
                                    color="primary"
                                    text="54% / 31°С / 3.3 Ghz"
                                />
                                <ServerOverviewElement
                                    data={getRandomData(10)}
                                    color="warning"
                                    text="57% / 21°С / 3.3 Ghz"
                                />
                            </Widget>

                            {/* bar Widget */}
                            <Widget
                                title="Revenue Breakdown"
                                upperTitle
                                className="bg-white rounded-lg shadow-lg"
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <div className="h-36">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie
                                                        data={PieChartData}
                                                        innerRadius={45}
                                                        outerRadius={60}
                                                        dataKey="value"
                                                    >
                                                        {PieChartData.map((entry, index) => (
                                                            <Cell
                                                                key={`cell-${index}`}
                                                                fill={theme.palette[entry.color].main}
                                                            />
                                                        ))}
                                                    </Pie>
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="h-full flex flex-col justify-center items-end pr-4">
                                            {PieChartData.map(({ name, value, color }, index) => (
                                                <div key={color} className="flex items-center mb-2 last:mb-0">
                                                    <Circle color={color} />
                                                    <Typography className="whitespace-nowrap ml-2 mr-1">
                                                        {name}
                                                    </Typography>
                                                    <Typography color="textSecondary">
                                                        {value}
                                                    </Typography>
                                                </div>
                                            ))}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Widget>

                            {/* Chart widget */}
                            <div className="col-span-full">
                                <Widget
                                    header={
                                        <div className="flex items-center justify-between flex-wrap pr-4 mx-4">
                                            <Typography variant="h5" color="textSecondary">
                                                Daily Line Chart
                                            </Typography>
                                            <div className="flex items-center pr-5 mx-4">
                                                <div className="flex items-center mr-4">
                                                    <Circle color="primary" />
                                                    <Typography className="ml-2">Revenue</Typography>
                                                </div>
                                                <div className="flex items-center mr-4">
                                                    <Circle sx={{ color: 'red' }} />
                                                    <Typography className="ml-2">Expenses</Typography>
                                                </div>

                                            </div>
                                            {/* <Select
                                                // value={mainChartState}
                                                // onChange={(e) => setMainChartState(e.target.value)}
                                                className="min-w-[120px]"
                                            >
                                                <MenuItem value="daily">Daily</MenuItem>
                                                <MenuItem value="weekly">Weekly</MenuItem>
                                                <MenuItem value="monthly">Monthly</MenuItem>
                                            </Select> */}
                                        </div>
                                    }
                                >
                                    <div className="p-4 text-gray-900">
                                        {/* <BoxHeader
                                            title="Revenue and Expenses"
                                            subtitle="Top line represents revenue, bottom line represents expenses"
                                            sideText="+4%"
                                        /> */}
                                        <div style={{ width: '100%', height: 400 }}>
                                            <ResponsiveContainer>
                                                <AreaChart
                                                    width={500}
                                                    height={400}
                                                    data={revenueExpenses}
                                                    margin={{
                                                        top: 15,
                                                        right: 25,
                                                        left: -10,
                                                        bottom: 60,
                                                    }}
                                                >
                                                    <defs>
                                                        <linearGradient
                                                            id="colorRevenue"
                                                            x1={"0"}
                                                            y1={"0"}
                                                            x2={"0"}
                                                            y2={"1"}
                                                        >
                                                            <stop
                                                                offset={"5%"}
                                                                stopColor='#b3cde0'
                                                                stopOpacity={0.5}
                                                            />
                                                            <stop
                                                                offset={"95%"}
                                                                stopColor='#b3cde0'
                                                                stopOpacity={0}
                                                            />
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="colorExpenses"
                                                            x1={"0"}
                                                            y1={"0"}
                                                            x2={"0"}
                                                            y2={"1"}
                                                        >
                                                            <stop
                                                                offset={"5%"}
                                                                stopColor='#f38181'
                                                                stopOpacity={0.5}
                                                            />
                                                            <stop
                                                                offset={"95%"}
                                                                stopColor="#f38181"
                                                                stopOpacity={0}
                                                            />
                                                        </linearGradient>
                                                    </defs>
                                                    <XAxis
                                                        dataKey="name"
                                                        tickLine={false}
                                                        style={{ fontSize: "10px" }}
                                                    />
                                                    <YAxis
                                                        tickLine={false}
                                                        axisLine={{ strokeWidth: "0" }}
                                                        style={{ fontSize: "10px" }}
                                                        domain={[8000, 23000]}
                                                    />
                                                    <Tooltip />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="revenue"
                                                        dot={true}
                                                        stroke="#364fc7"
                                                        fillOpacity={1}
                                                        fill="url(#colorRevenue)"
                                                    />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="expenses"
                                                        dot={true}
                                                        stroke="#f38181"
                                                        fillOpacity={1}
                                                        fill="url(#colorExpenses)"
                                                    />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </Widget>
                            </div>

                            {/* BigStat widget */}
                            {mock.bigStat.map((stat) => (
                                <div key={stat.product} className="w-full">
                                    <BigStat {...stat} />
                                </div>
                            ))}


                            {/* Table Widget */}
                            <div className="col-span-full">
                                <Widget
                                    title="Support Requests"
                                    upperTitle
                                    noBodyPadding
                                    className="overflow-x-auto"
                                >
                                    <Table data={mock.table} />
                                </Widget>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}



// ************************************************************************************

function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
    var array = new Array(length).fill();
    let lastValue;

    return array.map((item, index) => {
        let randomValue = Math.floor(Math.random() * multiplier + 1);

        while (
            randomValue <= min ||
            randomValue >= max ||
            (lastValue && randomValue - lastValue > maxDiff)
        ) {
            randomValue = Math.floor(Math.random() * multiplier + 1);
        }

        lastValue = randomValue;

        return { value: randomValue };
    });
}