import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PromotionsGrid() {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7047/api/Promotions")
      .then(res => setPromotions(res.data))
      .catch(err => console.error(err));
  }, []);

  const columns = [
    { field: "promotionId", headerName: "ID", width: 90 },
    { field: "employeeId", headerName: "Employee ID", width: 150 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "effectiveDate", headerName: "Effective Date", width: 180 },
    { field: "newSalary", headerName: "New Salary", width: 150 },
    { field: "remarks", headerName: "Remarks", width: 250 }
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={promotions}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.promotionId} // 👈 Fix here
      />
    </div>
  );
}
