import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EmployeeGrid.css'; // reuse existing styles

const DeductionGrid = () => {
  const [deductions, setDeductions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const deductionsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://103.175.122.31:83/api/deductions')
      .then(response => {
        setDeductions(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching deductions:", error);
        setLoading(false);
      });
  }, []);

  const filteredDeductions = deductions.filter(ded =>
    (ded.employeeID || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (ded.deductionType || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (ded.frequency || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (ded.amount?.toString() || '').includes(searchTerm)
  );

  const indexOfLast = currentPage * deductionsPerPage;
  const indexOfFirst = indexOfLast - deductionsPerPage;
  const currentDeductions = filteredDeductions.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredDeductions.length / deductionsPerPage);

  return (
    <div className="employee-grid-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Deduction List</h2>
        <button className="btn btn-success" onClick={() => navigate('/HRM/AddDeductionPayroll')}>
          ➕ Add Deduction
        </button>
      </div>

      <input
        type="text"
        className="search-input"
        placeholder="Search by employee, type, frequency..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Frequency</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentDeductions.length > 0 ? (
                currentDeductions.map(d => (
                  <tr key={d.deductionID}>
                    <td>{d.employeeID}</td>
                    <td>{d.deductionType}</td>
                    <td>{d.amount}</td>
                    <td>{d.frequency}</td>
                    <td>{d.isActive}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No deductions found.</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="pagination-controls">
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              Previous
            </button>
            <span> Page {currentPage} of {totalPages} </span>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DeductionGrid;
