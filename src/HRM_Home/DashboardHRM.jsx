import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  LineChart, Line, CartesianGrid, Legend,
} from 'recharts';

const departmentData = [
  { name: 'HR', employees: 10 },
  { name: 'IT', employees: 30 },
  { name: 'Finance', employees: 15 },
  { name: 'Marketing', employees: 20 },
];

const genderData = [
  { name: 'Male', value: 60 },
  { name: 'Female', value: 40 },
];

const joiningTrend = [
  { month: 'Jan', employees: 5 },
  { month: 'Feb', employees: 10 },
  { month: 'Mar', employees: 7 },
  { month: 'Apr', employees: 12 },
  { month: 'May', employees: 8 },
];

const COLORS = ['#0088FE', '#FF8042'];

function Dashboard() {
  return (
    <div style={{ padding: '30px' }}>
      <h5>Employees Dashboard</h5>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '30px' }}>
        {/* Bar Chart - Department Wise */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3>Employees by Department</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="employees" fill="#0d6efd" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Gender Distribution */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3>Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart - Joining Trends */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h3>Monthly Joining Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={joiningTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="employees" stroke="#28a745" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
