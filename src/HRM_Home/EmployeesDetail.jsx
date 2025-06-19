import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmployeeGrid.css';

const EmployeeGrid = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5; // Show 5 records per page

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(response => {
  //       setEmployees(response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching employee data:", error);
  //       setLoading(false);
  //     });
  // }, []);



  useEffect(() => {
    axios.get('http://103.175.122.31:83/api/Employees')
      .then(response => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      });
  }, []);



  // Get current page data
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const totalPages = Math.ceil(employees.length / employeesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="employee-grid-container">
      <h2>Employee List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
               <th>Department</th>
                <th>Employee No</th>
               <th>CNIC</th>
               <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map(emp => (
                  <tr key={emp.employeeID}>
                  <td>{emp.employeeName}</td>
                  <td>{emp.department}</td>
                  <td>{emp.employeeID}</td>
                  <td>{emp.cnic}</td>
                  <td>{emp.designation}</td>
                
                </tr>
              ))}
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

export default EmployeeGrid;
