import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 If you're using routing
import axios from 'axios';
import './EmployeeGrid.css';

const TaxSlabGrid = () => {
  const [slabs, setSlabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const slabsPerPage = 10;

  const navigate = useNavigate(); // 👈 Needed to route to AddTaxSlabsPayroll

  useEffect(() => {
    axios.get('http://103.175.122.31:83/api/taxslabs')
      .then(response => {
        setSlabs(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching tax slabs:", error);
        setLoading(false);
      });
  }, []);

  const filteredSlabs = slabs.filter(slab =>
    (slab.fiscalYearStart || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (slab.fiscalYearEnd || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    slab.taxRate?.toString().includes(searchTerm)
  );

  const indexOfLast = currentPage * slabsPerPage;
  const indexOfFirst = indexOfLast - slabsPerPage;
  const currentSlabs = filteredSlabs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredSlabs.length / slabsPerPage);

  return (
    <div className="employee-grid-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Tax Slab List</h2>
        <button className="btn btn-success" onClick={() => navigate('/HRM/AddTaxSlabsPayroll')}>
          ➕ Add Tax Slab
        </button>
      </div>

      <input
        type="text"
        className="search-input"
        placeholder="Search by Year or Rate..."
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
                <th>Slab ID</th>
                <th>Fiscal Year Start</th>
                <th>Fiscal Year End</th>
                <th>Lower Limit</th>
                <th>Upper Limit</th>
                <th>Tax Rate (%)</th>
              </tr>
            </thead>
            <tbody>
              {currentSlabs.length > 0 ? (
                currentSlabs.map(slab => (
                  <tr key={slab.slabID}>
                    <td>{slab.slabID}</td>
                    <td>{slab.fiscalYearStart?.split('T')[0]}</td>
                    <td>{slab.fiscalYearEnd?.split('T')[0]}</td>
                    <td>{slab.lowerLimit}</td>
                    <td>{slab.upperLimit}</td>
                    <td>{slab.taxRate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No tax slabs found.</td>
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

export default TaxSlabGrid;
