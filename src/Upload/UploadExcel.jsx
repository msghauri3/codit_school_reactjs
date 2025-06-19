import React, { useState } from 'react';
import axios from 'axios';

function ExcelUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://103.175.722.31:83/api/payroll/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(res.data);
    } catch (err) {
      console.error("Upload Error:", err);
      setMessage("Upload failed ❌");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Upload Excel File</h3>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleUpload} className="btn btn-primary mt-2">Upload</button>
      <div className="mt-2">{message}</div>
    </div>
  );
}

export default ExcelUpload;
