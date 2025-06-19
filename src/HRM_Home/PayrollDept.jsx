import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EmployeeGrid.css';

const EmployeeGrid = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);


  const employeesPerPage = 10;

  const navigate = useNavigate();

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


  const handleRowDoubleClick = (employee) => {
    navigate(`/HRM/EmployeeDetail/${employee.employeeID}`);
  };


  // 🔍 Filter employees by searchTerm
const filteredEmployees = employees
  .filter(emp =>
    emp.employeeName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.designation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.employeeID?.toString().includes(searchTerm) ||
    emp.cnic?.includes(searchTerm)
  )
  .filter(emp => departmentFilter === '' || emp.department === departmentFilter);


const handleGeneratePayroll = async () => {
  try {
    const response = await axios.post("http://103.175.122.31:83/api/payroll/processsalary", {
      // employeeIds: selectedEmployeeIds,
      year: 2025,
      month: "May",
       employeeIDs: selectedEmployeeIds  // ✅ matching backend key
    });

    console.log("Payroll Employees:", response.data);

    // Optionally store to display in UI
    // setPayrollEmployees(response.data);
  } catch (err) {
    console.error("Payroll Generation Failed", err);
  }
};




  
  // Get current page data
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="employee-grid-container">
   {/* <h4>Employee List</h4> */}


<div className="dropdown-wrapper">
  <label htmlFor="department-select">Filter by Department:</label>
  <select
    id="department-select"
    value={departmentFilter}
    onChange={(e) => {
      setDepartmentFilter(e.target.value);
      setCurrentPage(1);
    }}
  >
    <option value="">All Departments</option>
    {Array.from(new Set(employees.map(emp => emp.department))).map(dept => (
      <option key={dept} value={dept}>{dept}</option>
    ))}
  </select>
</div>


<div style={{ marginBottom: '10px' }}>
  <button
    className="btn btn-sm btn-outline-primary"
    onClick={() => {
      const allIds = currentEmployees.map(emp => emp.employeeID);
      setSelectedEmployeeIds(allIds);
    }}
  >
    Select All
  </button>

  <button
    className="btn btn-sm btn-outline-secondary ms-2"
    onClick={() => setSelectedEmployeeIds([])}
  >
    Clear Selection
  </button>



<button
  className="btn btn-success mt-2"
  onClick={handleGeneratePayroll}
  disabled={selectedEmployeeIds.length === 0}
>
  Generate Payroll
</button>



</div>




      {/* 🔍 Search Input
      <input
        type="text"
        placeholder="Search by name, ID, CNIC, department, designation..."
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset to first page on new search
        }}
        className="search-input"
      /> */}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="employee-table">
            <thead>
              <tr>
                 <th></th> {/* checkbox column */}
                <th>Name</th>
                <th>Department</th>
                <th>Employee No</th>
                <th>CNIC</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
  {currentEmployees.length > 0 ? (
    currentEmployees.map(emp => (
      <tr key={emp.employeeID} onDoubleClick={() => handleRowDoubleClick(emp)}>
        <td>
          <input
            type="checkbox"
            checked={selectedEmployeeIds.includes(emp.employeeID)}
            onChange={() => {
              if (selectedEmployeeIds.includes(emp.employeeID)) {
                setSelectedEmployeeIds(prev =>
                  prev.filter(id => id !== emp.employeeID)
                );
              } else {
                setSelectedEmployeeIds(prev => [...prev, emp.employeeID]);
              }
            }}
          />
        </td>
        <td>{emp.employeeName}</td>
        <td>{emp.department}</td>
        <td>{emp.employeeID}</td>
        <td>{emp.cnic}</td>
        <td>{emp.designation}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6">No matching employees found.</td>
    </tr>
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

export default EmployeeGrid;



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
