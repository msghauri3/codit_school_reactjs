import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`http://103.175.122.31:83/api/Employees/${id}`)
      .then(res => setEmployee(res.data))
      .catch(err => console.error("Error loading employee:", err));
  }, [id]);

  if (!employee) return <div>Loading employee details...</div>;

  return (
    <div className="container mt-4">
      <h2>Employee Detail - {employee.employeeName}</h2>
      <p><strong>Employee ID:</strong> {employee.employeeID}</p>
      <p><strong>CNIC:</strong> {employee.cnic}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Designation:</strong> {employee.designation}</p>
    </div>
  );
}

export default EmployeeDetail;
