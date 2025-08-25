import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function EmployeeList() {
const navigate = useNavigate();


  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  // Fetch data
  useEffect(() => {
    axios
      .get("https://localhost:7047/api/Employees")
      .then((response) => {
        console.log("API Data:", response.data); // ✅ Debug: check actual field names
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
  const currentRecords = filteredEmployees.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredEmployees.length / recordsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container mt-4">

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
            currentRecords.map((emp, index) => (
           
              <tr
                key={emp.uid || index}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/HRM/employees/${emp.uid}`)} // 👈 Go to details page
              >

                <td>{emp.uid}</td>
                <td>{emp.employeeID || emp.employeeId}</td>
                <td>{emp.EmployeeName || emp.employeeName}</td>
                <td>{emp.Designation || emp.designation}</td>
                <td>{emp.Department || emp.department}</td>
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
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './EmployeeGrid.css';

// const EmployeeGrid = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const employeesPerPage = 10;

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://103.175.122.31:83/api/Employees')
//       .then(response => {
//         setEmployees(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching employee data:", error);
//         setLoading(false);
//       });
//   }, []);


//   const handleRowDoubleClick = (employee) => {
//     navigate(`/HRM/EmployeeDetail/${employee.employeeID}`);
//   };


//   // 🔍 Filter employees by searchTerm
//   const filteredEmployees = employees.filter(emp =>
//     emp.employeeName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     emp.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     emp.designation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     emp.employeeID?.toString().includes(searchTerm) ||
//     emp.cnic?.includes(searchTerm)
//   );

//   // Get current page data
//   const indexOfLastEmployee = currentPage * employeesPerPage;
//   const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
//   const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

//   const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

//   const nextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage(prev => prev - 1);
//   };

//   return (
//     <div className="employee-grid-container">
//       <h2>Employee List</h2>

//       {/* 🔍 Search Input */}
//       <input
//         type="text"
//         placeholder="Search by name, ID, CNIC, department, designation..."
//         value={searchTerm}
//         onChange={e => {
//           setSearchTerm(e.target.value);
//           setCurrentPage(1); // Reset to first page on new search
//         }}
//         className="search-input"
//       />

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <table className="employee-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Department</th>
//                 <th>Employee No</th>
//                 <th>CNIC</th>
//                 <th>Designation</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentEmployees.length > 0 ? (
//                 currentEmployees.map(emp => (
//                   <tr key={emp.employeeID} onDoubleClick={() => handleRowDoubleClick(emp)} >
//                     <td>{emp.employeeName}</td>
//                     <td>{emp.department}</td>
//                     <td>{emp.employeeID}</td>
//                     <td>{emp.cnic}</td>
//                     <td>{emp.designation}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5">No matching employees found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           <div className="pagination-controls">
//             <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
//             <span> Page {currentPage} of {totalPages} </span>
//             <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default EmployeeGrid;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './EmployeeGrid.css';

// const EmployeeGrid = () => {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [currentPage, setCurrentPage] = useState(1);
//   const employeesPerPage = 5; // Show 5 records per page

//   // useEffect(() => {
//   //   axios.get('https://jsonplaceholder.typicode.com/users')
//   //     .then(response => {
//   //       setEmployees(response.data);
//   //       setLoading(false);
//   //     })
//   //     .catch(error => {
//   //       console.error("Error fetching employee data:", error);
//   //       setLoading(false);
//   //     });
//   // }, []);



//   useEffect(() => {
//     axios.get('http://103.175.122.31:83/api/Employees')
//       .then(response => {
//         setEmployees(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching employee data:", error);
//         setLoading(false);
//       });
//   }, []);



//   // Get current page data
//   const indexOfLastEmployee = currentPage * employeesPerPage;
//   const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
//   const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

//   const totalPages = Math.ceil(employees.length / employeesPerPage);

//   const nextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage(prev => prev - 1);
//   };

//   return (
//     <div className="employee-grid-container">
//       <h2>Employee List</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <table className="employee-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                <th>Department</th>
//                 <th>Employee No</th>
//                <th>CNIC</th>
//                <th>Designation</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentEmployees.map(emp => (
//                   <tr key={emp.employeeID}>
//                   <td>{emp.employeeName}</td>
//                   <td>{emp.department}</td>
//                   <td>{emp.employeeID}</td>
//                   <td>{emp.cnic}</td>
//                   <td>{emp.designation}</td>
                
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="pagination-controls">
//             <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
//             <span> Page {currentPage} of {totalPages} </span>
//             <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default EmployeeGrid;
