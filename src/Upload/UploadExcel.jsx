import React, { useState } from 'react';
import axios from 'axios';

function ExcelUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null); // Store full object

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage({ error: "Please select a file" });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://103.175.122.31:83/api/payroll/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(res.data);
    } catch (err) {
      console.error("Upload Error:", err);
      setMessage({ error: "Upload failed ❌" });
    }
  };

  return (
    <div className="container mt-5">
      <h3>Upload Excel File</h3>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} className="form-control mb-2" />
      <button onClick={handleUpload} className="btn btn-primary">Upload</button>

      <div className="mt-3">
        {message && (
          <div className={`alert ${message.error ? 'alert-danger' : 'alert-success'}`}>
            {message.error ? (
              <div>{message.error}</div>
            ) : (
              <>
                <p><strong>{message.message}</strong></p>
                <p>✅ Inserted: {message.insertedCount}</p>
                <p>⚠️ Skipped: {message.skippedCount}</p>
                {message.skippedEmployeeIDs?.length > 0 && (
                  <p>⛔ Skipped IDs: {message.skippedEmployeeIDs.join(', ')}</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExcelUpload;
