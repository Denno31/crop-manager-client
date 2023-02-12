import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import renderActionsButton from "./renderActionsButton";
import RenderStockButton from "./RenderStockButton";





export default function DataGridInventory(props) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={props.rows}
        columns={[
          ...props.cols,
           {
            field: "Add/Deduct",
            headerName: "Add/Deduct Stock",
            width: 150,
            renderCell: RenderStockButton,
            disableClickEventBubbling: true,
          },
          {
            field: "Actions",
            headerName: "Actions",
            width: 150,
            renderCell: renderActionsButton,
            disableClickEventBubbling: true,
          },
        ]}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
