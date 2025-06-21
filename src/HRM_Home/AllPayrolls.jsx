import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmployeeGrid.css';

const GeneratedPayrollGrid = () => {
  const [payrolls, setPayrolls] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const payrollsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [payrollRes, employeeRes] = await Promise.all([
          axios.get('http://103.175.122.31:83/api/salarypayments/'),
          axios.get('http://103.175.122.31:83/api/Employees')
        ]);

        setPayrolls(payrollRes.data);
        setEmployees(employeeRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getDepartment = (employeeID) => {
    const emp = employees.find(e => e.employeeID === employeeID);
    return emp?.department || '';
  };

  const filteredPayrolls = payrolls.filter(item => {
    const dept = getDepartment(item.employeeID).toLowerCase();
    const matchesSearch = item.employeeID?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.salaryMonth?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept = departmentFilter === '' || dept === departmentFilter.toLowerCase();
    const matchesMonth = monthFilter === '' || item.salaryMonth === monthFilter;
    const matchesYear = yearFilter === '' || item.salaryYear?.toString() === yearFilter;

    return matchesSearch && matchesDept && matchesMonth && matchesYear;
  });

  const indexOfLast = currentPage * payrollsPerPage;
  const indexOfFirst = indexOfLast - payrollsPerPage;
  const currentPayrolls = filteredPayrolls.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPayrolls.length / payrollsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  // Extract unique departments, months, and years
  const uniqueDepartments = Array.from(new Set(
    employees.map(e => e.department).filter(d => typeof d === 'string' && d.trim() !== '')
  ));

 const uniqueMonths = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

  const uniqueYears = Array.from(new Set(payrolls.map(p => p.salaryYear))).filter(Boolean);

  return (
    <div className="employee-grid-container">
      <h4>Generated Payroll</h4>

      <div className="dropdown-wrapper" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '15px' }}>
        {/* 🔽 Department Filter */}
        <div>
          <label>Department:</label>
          <select
            value={departmentFilter}
            onChange={(e) => {
              setDepartmentFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All</option>
            {uniqueDepartments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* 🔽 Month Filter */}
        <div>
          <label>Month:</label>
          <select
            value={monthFilter}
            onChange={(e) => {
              setMonthFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All</option>
            {uniqueMonths.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* 🔽 Year Filter */}
        <div>
          <label>Year:</label>
          <select
            value={yearFilter}
            onChange={(e) => {
              setYearFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All</option>
            {uniqueYears.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search by Employee ID or Month..."
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="search-input"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Year</th>
                <th>Month</th>
                <th>Basic Salary</th>
                <th>Allowances</th>
                <th>Deductions</th>
                <th>Tax</th>
                <th>Gross</th>
                <th>Net Salary</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {currentPayrolls.length > 0 ? (
                currentPayrolls.map((p, idx) => (
                  <tr key={idx}>
                    <td>{p.employeeID}</td>
                    <td>{getDepartment(p.employeeID)}</td>
                    <td>{p.salaryYear}</td>
                    <td>{p.salaryMonth}</td>
                    <td>{p.basicSalary}</td>
                    <td>{p.totalAllowances}</td>
                    <td>{p.totalDeductions}</td>
                    <td>{p.taxAmount}</td>
                    <td>{p.grossSalary}</td>
                    <td>{p.netSalary}</td>
                    <td>{new Date(p.paymentDate).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="11">No payroll records found.</td></tr>
              )}
            </tbody>
          </table>

          <div className="pagination-controls">
            <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
            <span> Page {currentPage} of {totalPages} </span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default GeneratedPayrollGrid;
