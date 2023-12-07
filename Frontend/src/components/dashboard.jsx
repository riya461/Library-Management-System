import React from "react";
import { useState, useEffect } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { PiBooksFill } from "react-icons/pi";
import { LiaPenNibSolid } from "react-icons/lia";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./styles/dashboard.css";

function Dashboard() {

  const [availableCount, setAvailableCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const [authorCount, setAuthorCount] = useState(0);
  const [memCount, setMemCount] = useState(0);

  //setting total books value
  useEffect(() => {
    fetch("http://localhost:5000/api/dash/totalBooks")
     .then(res => res.json())
     .then(
       (result) => {
         setTotalCount(parseInt(result.totalbooks, 10));
         console.log(parseInt(result.totalbooks, 10));
       })
       },[]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dash/availableCount")
     .then(res => res.json())
     .then(
       (result) => {
         setAvailableCount(parseInt(result.available, 10));
         console.log(parseInt(result.available, 10));
       })
       },[]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dash/totalAuthors")
     .then(res => res.json())
     .then(
       (result) => {
         setAuthorCount(parseInt(result.count, 10));
         console.log(parseInt(result.count, 10));
       })
       },[]);
       useEffect(() => {
        fetch("http://localhost:5000/api/dash/totalReaders")
         .then(res => res.json())
         .then(
           (result) => {
             setMemCount(parseInt(result["totalreaders"], 10));
             console.log(parseInt(result));
           })
           },[]);




  const bookData = [
    {
      name: "Available",
      value: availableCount,
    },
    {
      name: "Borrowed",
      value: totalCount - availableCount,
    },
  ];

  const memebersData = [
    {
      name: "Active",
      value: 50,
    },
    {
      name: "Inactive",
      value: 15,
    },
  ];

  const COLORS1 = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ff7300",
  ];
  const COLORS2 = [
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ff7300",
    "#0088FE",
    "#00C49F",
  ];
  const totalBooks = bookData.reduce((total, entry) => total + entry.value, 0);
  const totalUsers = memebersData.reduce(
    (total, entry) => total + entry.value,
    0
  );

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>TOTAL BOOKS</h3>
            <PiBooksFill className="card_icon" />
          </div>
          <h1>{totalBooks}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>AVAILABLE BOOKS</h3>
            <PiBooksFill className="card_icon" />
          </div>
          <h1>{availableCount}</h1>
        </div>        
        <div className="card">
          <div className="card-inner">
            <h3>TOTAL AUTHORS</h3>
            <LiaPenNibSolid className="card_icon" />
          </div>
          <h1>{authorCount}</h1>
        </div>
        
        <div className="card">
          <div className="card-inner">
            <h3>TOTAL MEMBERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{memCount}</h1>
        </div>
      </div>

      <div className="charts">
        <div className="pie-chart">
          <h3>Books Overview:</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart className="chart">
              <Pie
                data={bookData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  percent,
                  index,
                  name,
                }) => {
                  const radius =
                    innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {`${name} ${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {bookData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS1[index % COLORS1.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
