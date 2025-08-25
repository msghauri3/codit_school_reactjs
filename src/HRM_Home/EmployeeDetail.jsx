import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 50;

  // Fetch data
  useEffect(() => {
    axios
      .get("https://localhost:7047/api/Employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  // ✅ Filter employees based on search term
  const filteredEmployees = employees.filter((emp) =>
    Object.values(emp)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // ✅ Pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredEmployees.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredEmployees.length / recordsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Employees</h2>

      {/* ✅ Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to first page when searching
          }}
        />
      </div>

      {/* Employee Table */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>UID</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.length > 0 ? (
            currentRecords.map((emp) => (
              <tr key={emp.uid}>
                <td>{emp.uid}</td>
                <td>{emp.EmployeeID}</td>
                <td>{emp.EmployeeName}</td>
                <td>{emp.Designation}</td>
                <td>{emp.Department}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-secondary"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-secondary"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EmployeeList;




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function EmployeeDetail() {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState(null);

//   useEffect(() => {
//     axios.get(`http://103.175.122.31:83/api/Employees/${id}`)
//       .then(res => setEmployee(res.data))
//       .catch(err => console.error("Error loading employee:", err));
//   }, [id]);

//   if (!employee) return <div>Loading employee details...</div>;

//   return (
//     <div className="container mt-4">
//       <h2>Employee Detail - {employee.employeeName}</h2>
//       <p><strong>Employee ID:</strong> {employee.employeeID}</p>
//       <p><strong>CNIC:</strong> {employee.cnic}</p>
//       <p><strong>Department:</strong> {employee.department}</p>
//       <p><strong>Designation:</strong> {employee.designation}</p>
//     </div>
//   );
// }

// export default EmployeeDetail;
