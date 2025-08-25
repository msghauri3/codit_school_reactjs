import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import axios from 'axios';

const TaxSlabsGrid = () => {
  const [taxSlabs, setTaxSlabs] = useState([]);
  const [filteredSlabs, setFilteredSlabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://localhost:7047/api/TaxSlabs')
      .then(res => {
        console.log('Fetched Tax Slabs:', res.data);
        const data = res.data || [];
        setTaxSlabs(data);
        setFilteredSlabs(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('P 1:');
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter slabs based on search
  useEffect(() => {
    if (!search) {
      setFilteredSlabs(taxSlabs);
      return;
    }

    const lowerSearch = search.toLowerCase();
    const filtered = taxSlabs.filter(slab =>
      (slab.slabID && slab.slabID.toString().includes(lowerSearch)) ||
      (slab.fiscalYearStart && new Date(slab.fiscalYearStart).toLocaleDateString().includes(lowerSearch)) ||
      (slab.fiscalYearEnd && new Date(slab.fiscalYearEnd).toLocaleDateString().includes(lowerSearch)) ||
      (slab.lowerLimit && slab.lowerLimit.toString().includes(lowerSearch)) ||
      (slab.upperLimit && slab.upperLimit.toString().includes(lowerSearch)) ||
      (slab.taxRate && slab.taxRate.toString().includes(lowerSearch))
    );

    setFilteredSlabs(filtered);
  }, [search, taxSlabs]);

const columns = [
  { field: 'slabID', headerName: 'Slab ID', width: 100 },
  { 
    field: 'fiscalYearStart', 
    headerName: 'Fiscal Year Start', 
    width: 180,
  },
  { 
    field: 'fiscalYearEnd', 
    headerName: 'Fiscal Year End', 
    width: 180,    
  },
  { field: 'lowerLimit', headerName: 'Lower Limit', width: 120 },
  { field: 'upperLimit', headerName: 'Upper Limit', width: 120 },
  { field: 'taxRate', headerName: 'Tax Rate (%)', width: 120 }
];




  return (
    <div style={{ height: 600, width: '100%' }}>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        style={{ marginBottom: '10px' }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DataGrid
        rows={filteredSlabs}
        columns={columns}
        getRowId={(row) => row.slabID}   // ✅ important
        pageSize={10}
        rowsPerPageOptions={[10]}
        loading={loading}
      />
    </div>
  );
};

export default TaxSlabsGrid;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // 👈 If you're using routing
// import axios from 'axios';
// import './EmployeeGrid.css';

// const TaxSlabGrid = () => {
//   const [slabs, setSlabs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const slabsPerPage = 10;

//   const navigate = useNavigate(); // 👈 Needed to route to AddTaxSlabsPayroll

//   useEffect(() => {
//     axios.get('http://103.175.122.31:83/api/taxslabs')
//       .then(response => {
//         setSlabs(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching tax slabs:", error);
//         setLoading(false);
//       });
//   }, []);

//   const filteredSlabs = slabs.filter(slab =>
//     (slab.fiscalYearStart || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (slab.fiscalYearEnd || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
//     slab.taxRate?.toString().includes(searchTerm)
//   );

//   const indexOfLast = currentPage * slabsPerPage;
//   const indexOfFirst = indexOfLast - slabsPerPage;
//   const currentSlabs = filteredSlabs.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredSlabs.length / slabsPerPage);

//   return (
//     <div className="employee-grid-container">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2>Tax Slab List</h2>
//         <button className="btn btn-success" onClick={() => navigate('/HRM/AddTaxSlabsPayroll')}>
//           ➕ Add Tax Slab
//         </button>
//       </div>

//       <input
//         type="text"
//         className="search-input"
//         placeholder="Search by Year or Rate..."
//         value={searchTerm}
//         onChange={(e) => {
//           setSearchTerm(e.target.value);
//           setCurrentPage(1);
//         }}
//       />

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <table className="employee-table">
//             <thead>
//               <tr>
//                 <th>Slab ID</th>
//                 <th>Fiscal Year Start</th>
//                 <th>Fiscal Year End</th>
//                 <th>Lower Limit</th>
//                 <th>Upper Limit</th>
//                 <th>Tax Rate (%)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentSlabs.length > 0 ? (
//                 currentSlabs.map(slab => (
//                   <tr key={slab.slabID}>
//                     <td>{slab.slabID}</td>
//                     <td>{slab.fiscalYearStart?.split('T')[0]}</td>
//                     <td>{slab.fiscalYearEnd?.split('T')[0]}</td>
//                     <td>{slab.lowerLimit}</td>
//                     <td>{slab.upperLimit}</td>
//                     <td>{slab.taxRate}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6">No tax slabs found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           <div className="pagination-controls">
//             <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
//               Previous
//             </button>
//             <span> Page {currentPage} of {totalPages} </span>
//             <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TaxSlabGrid;
