import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, MenuItem, Grid } from '@mui/material';
import axios from 'axios';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const PayrollGrid = () => {
  const [payrolls, setPayrolls] = useState([]);
  const [filteredPayrolls, setFilteredPayrolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Fetch payroll data
  useEffect(() => {
    axios.get('https://localhost:7047/api/Payroll')
      .then(res => {
        const data = res.data || [];
        setPayrolls(data);
        setFilteredPayrolls(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Get unique years from payroll data
  const years = Array.from(new Set(payrolls.map(p => p.salaryYear))).sort((a,b) => b-a);

  // Filter payrolls based on search, month, and year
  useEffect(() => {
    let filtered = payrolls;

    // Filter by search text
    if (search) {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter(p =>
        (p.employeeID && p.employeeID.toString().toLowerCase().includes(lowerSearch)) ||
        (p.employeeName && p.employeeName.toString().toLowerCase().includes(lowerSearch)) ||
        (p.salaryMonth && p.salaryMonth.toLowerCase().includes(lowerSearch)) ||
        (p.salaryYear && p.salaryYear.toString().includes(lowerSearch)) ||
        (p.basicSalary && p.basicSalary.toString().includes(lowerSearch)) ||
        (p.totalAllowances && p.totalAllowances.toString().includes(lowerSearch)) ||
        (p.totalDeductions && p.totalDeductions.toString().includes(lowerSearch)) ||
        (p.taxAmount && p.taxAmount.toString().includes(lowerSearch)) ||
        (p.netSalary && p.netSalary.toString().includes(lowerSearch)) ||
        (p.grossSalary && p.grossSalary.toString().includes(lowerSearch)) ||
        (p.paymentDate && new Date(p.paymentDate).toLocaleDateString().includes(lowerSearch))
      );
    }

    // Filter by month
    if (selectedMonth) {
      filtered = filtered.filter(p =>
        p.salaryMonth && p.salaryMonth.toLowerCase() === selectedMonth.toLowerCase()
      );
    }

    // Filter by year
    if (selectedYear) {
      filtered = filtered.filter(p =>
        p.salaryYear && p.salaryYear.toString() === selectedYear.toString()
      );
    }

    setFilteredPayrolls(filtered);
  }, [search, selectedMonth, selectedYear, payrolls]);

  const columns = [
    { field: 'employeeID', headerName: 'Employee ID', width: 100 },
     { field: 'employeeName', headerName: 'Employee Name', width: 100 },
    { field: 'salaryMonth', headerName: 'Month', width: 100 },
    { field: 'salaryYear', headerName: 'Year', width: 100 },
    { field: 'basicSalary', headerName: 'Basic Salary', width: 120 },
    { field: 'totalAllowances', headerName: 'Allowances', width: 120 },
    { field: 'totalDeductions', headerName: 'Deductions', width: 120 },
    { field: 'taxAmount', headerName: 'Tax', width: 100 },
    { field: 'netSalary', headerName: 'Net Salary', width: 120 },
    { field: 'grossSalary', headerName: 'Gross Salary', width: 120 },
    { 
      field: 'paymentDate', 
      headerName: 'Payment Date', 
      width: 150,
      valueGetter: (params) => {
        if (!params || !params.row || !params.row.paymentDate) return '';
        try {
          return new Date(params.row.paymentDate).toLocaleDateString();
        } catch (e) {
          return '';
        }
      }
    }
  ];

  return (
    <div style={{ height: 700, width: '100%' }}>
    

<Grid container spacing={2} style={{ marginBottom: '10px', alignItems: 'center' }}>
  <Grid item>
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ width: 300 }}
    />
  </Grid>

  <Grid item>
    <TextField
      select
      label="Filter by Month"
      variant="outlined"
      size="small"
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
      style={{ width: 200 }}  // fixed width
    >
      <MenuItem value="">All Months</MenuItem>
      {months.map((month) => (
        <MenuItem key={month} value={month}>{month}</MenuItem>
      ))}
    </TextField>
  </Grid>

  <Grid item>
    <TextField
      select
      label="Filter by Year"
      variant="outlined"
      size="small"
      value={selectedYear}
      onChange={(e) => setSelectedYear(e.target.value)}
      style={{ width: 150 }}  // fixed width
    >
      <MenuItem value="">All Years</MenuItem>
      {years.map((year) => (
        <MenuItem key={year} value={year}>{year}</MenuItem>
      ))}
    </TextField>
  </Grid>
</Grid>




      <DataGrid
        rows={filteredPayrolls}
        columns={columns}
        getRowId={(row) => row.paymentID || Math.random()}
        pageSize={10}
        rowsPerPageOptions={[10]}
        loading={loading}
      />
    </div>
  );
};

export default PayrollGrid;
