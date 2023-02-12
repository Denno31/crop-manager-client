import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import renderActionsButton from "./renderActionsButton";
import RenderStockButton from "./RenderStockButton";
import PaidStatusCheckBox from "./PaidStatusCheckBox";





export default function DataGridTasks(props) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        rows={props.rows}
        columns={[
          ...props.cols,
           {
            field: "paid",
            headerName: "Paid",
            width: 150,
            renderCell: PaidStatusCheckBox,
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
