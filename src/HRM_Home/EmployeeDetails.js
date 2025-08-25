import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`https://localhost:7047/api/Employees/${id}`)
      .then((res) => setEmployee(res.data))
      .catch((err) => console.error("Error fetching details:", err));
  }, [id]);

  if (!employee) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Employee Details</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>ID:</strong> {employee.uid}</li>
        <li className="list-group-item"><strong>Employee ID:</strong> {employee.employeeID}</li>
        <li className="list-group-item"><strong>Name:</strong> {employee.employeeName}</li>
        <li className="list-group-item"><strong>Designation:</strong> {employee.designation}</li>
        <li className="list-group-item"><strong>Department:</strong> {employee.department}</li>
      </ul>
    </div>
  );
}

export default EmployeeDetails;
