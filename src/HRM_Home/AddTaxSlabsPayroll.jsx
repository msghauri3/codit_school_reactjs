import React, { useState } from 'react';
import axios from 'axios';
import './PayrollForm.css';

function TaxSlabForm() {
  const [formData, setFormData] = useState({
    fiscalYearStart: '',
    fiscalYearEnd: '',
    lowerLimit: '',
    upperLimit: '',
    taxRate: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://103.175.122.31:83/api/taxslabs', formData);
      setMessage('✅ Tax slab saved successfully!');
      setFormData({
        fiscalYearStart: '',
        fiscalYearEnd: '',
        lowerLimit: '',
        upperLimit: '',
        taxRate: ''
      });
    } catch (error) {
      console.error('Error saving tax slab:', error);
      setMessage('❌ Failed to save tax slab.');
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '500px' }}>
      <h4>Add Tax Slab</h4>

      {message && <div className="alert alert-info">{message}</div>}

<form onSubmit={handleSubmit} className="tax-form">
  <div className="form-row">
    <div className="form-group">
      <label>Fiscal Year Start</label>
      <input
        type="date"
        name="fiscalYearStart"
        value={formData.fiscalYearStart}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Fiscal Year End</label>
      <input
        type="date"
        name="fiscalYearEnd"
        value={formData.fiscalYearEnd}
        onChange={handleChange}
        required
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Lower Limit</label>
      <input
        type="number"
        name="lowerLimit"
        value={formData.lowerLimit}
        onChange={handleChange}
        required
        step="0.01"
      />
    </div>

    <div className="form-group">
      <label>Upper Limit</label>
      <input
        type="number"
        name="upperLimit"
        value={formData.upperLimit}
        onChange={handleChange}
        required
        step="0.01"
      />
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Tax Rate (%)</label>
      <input
        type="number"
        name="taxRate"
        value={formData.taxRate}
        onChange={handleChange}
        required
        step="0.01"
      />
    </div>
  </div>

  <button type="submit" className="submit-btn">Save Tax Slab</button>
</form>

    </div>
  );
}

export default TaxSlabForm;
