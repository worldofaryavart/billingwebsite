import Sidebar from '@/Components/Sidebar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Tooltip,
    Area,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { useMemo } from "react";
import BoxHeader from '@/Components/BoxHeader';
import FlexBetween from '@/Components/FlexBetween';
import { Box, Typography } from '@mui/material';

export default function Dashboard() {
    const { props: { auth } } = usePage();  // Use usePage to get the auth object

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

    const pieData = [
        { name: 'Group A', value: 400, color: '#FF9999' },
        { name: 'Group B', value: 300, color: '#66CCFF' },
        { name: 'Group C', value: 300, color: '#FFCC66' },
        { name: 'Group D', value: 200, color: '#99CC99' },
    ];

    return (
        <AuthenticatedLayout
            user={auth?.user}  // Add optional chaining to prevent errors if auth is undefined
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
            }
        >
            <Head title="Dashboard" />
            <div className="pt-8 h-[calc(100vh-138px)] overflow-y-auto">
                <div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 text-gray-900">
                            <BoxHeader
                                title="Revenue and Expenses"
                                subtitle="Top line represents revenue, bottom line represents expenses"
                                sideText="+4%"
                            />
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

                        {/* Spending */}
                        <div className="p-4 text-gray-900">
                            <BoxHeader
                                title="Campaigns and Targets"
                                subtitle="subtitle"
                                sideText="+4%"
                            />
                            <div style={{ width: '100%', height: 400 }}>
                                <FlexBetween mt={"1.2rem"} gap={"1.5rem"} pr={"1rem"}>
                                    <PieChart
                                        width={110}
                                        height={100}
                                        margin={{
                                            top: 50,
                                            right: 0,
                                            left: -10,
                                            bottom: 55,
                                        }}
                                    >
                                        <Pie
                                            stroke="none"
                                            data={pieData}
                                            innerRadius={18}
                                            outerRadius={38}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {pieData.map((pie, index) => (
                                                <Cell key={`cell-${index}`} fill={pie.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                    <Box ml={"-0.7rem"} flexBasis={"40%"} textAlign={"center"}>
                                        <Typography variant="h5">Target Sales</Typography>
                                        <Typography
                                            m={"0.3rem 0"}
                                            variant="h3"
                                            color={"#b3cde0"}
                                        >
                                            83
                                        </Typography>
                                        <Typography variant="h6">
                                            Finance goals of the Campaigns that is desired
                                        </Typography>
                                    </Box>
                                    <Box ml={"-0.7rem"} flexBasis={"40%"} textAlign={"center"}>
                                        <Typography variant="h5">Loses in Revenue</Typography>
                                        <Typography variant="h6">Loses are down by 25%</Typography>
                                        <Typography mt="0.5rem" variant="h5">
                                            Profit margins
                                        </Typography>
                                        <Typography mt="0.5rem" variant="h6">
                                            margins are up from last month.
                                        </Typography>
                                    </Box>
                                </FlexBetween>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
