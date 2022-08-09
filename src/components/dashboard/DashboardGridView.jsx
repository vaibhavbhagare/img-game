import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

const DashboardGridView = ({ conferencesList }) => {
  const [columnDefs] = useState([
    { field: "title", headerName: "Title" },
    { field: "description", headerName: "Description" },
    { field: "date", headerName: "Date and Time" },
    { field: "author", headerName: "Speaker" },
    { field: "address", headerName: "Address" },
    { field: "link", headerName: "Link to Join" },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact
        rowData={conferencesList}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
};

export default DashboardGridView;
