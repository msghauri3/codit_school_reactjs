import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PayrollForm.css'; // assuming your stylesheet is named like this

function AddDeductionPayroll() {
  const [employeeID, setEmployeeID] = useState('');
  const [deductionType, setDeductionType] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('');
  const [isActive, setIsActive] = useState('Yes');
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://103.175.122.31:83/api/employees')
      .then(response => setEmployees(response.data))
      .catch(error => console.error("Error fetching employee list", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      employeeID,
      deductionType,
      amount: parseFloat(amount),
      isActive,
      frequency
    };

    try {
      await axios.post('http://103.175.122.31:83/api/deductions', payload);
      setMessage("✅ Deduction added successfully");
      setEmployeeID('');
      setDeductionType('');
      setAmount('');
      setFrequency('');
      setIsActive('Yes');
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Failed to add deduction");
    }
  };

  return (
    <div className="tax-form">
      <h3>Add Deduction</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Employee</label>
            <select
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              required
            >
              <option value="">-- Select Employee --</option>
              {employees.map(emp => (
                <option key={emp.employeeID} value={emp.employeeID}>
                  {emp.employeeName} ({emp.employeeID})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Deduction Type</label>
            <input
              type="text"
              value={deductionType}
              onChange={(e) => setDeductionType(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Frequency</label>
            <input
              type="text"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              placeholder="Monthly / Yearly / etc."
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Status</label>
            <select value={isActive} onChange={(e) => setIsActive(e.target.value)}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">Save Deduction</button>
        {message && <p className="mt-2">{message}</p>}
      </form>
    </div>
  );
}

export default AddDeductionPayroll;
