import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
// import { IconChevronUp } from "@tabler/icons-react";
// import NoTableDataComponent from "components/tableNodata";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Button, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddIcon from "@mui/icons-material/Add";
const TableData = ({
  data,
  columns,
  className,
  paginationTotalRows,
  loading,
  // setSelectedRows,
}) => {
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#F7F7F7",
        // boxShadow: " 0px 0px 4px 0px #00000040"
        // border: "1px solid #00000040",
        fontSize: "16px !important",
        color: "#404040",
        fontWeight: "600",
      },
    },
    rows: {
      style: {
        fontSize: "15px",
        fontWeight: "500",
        // minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        borderRight: "1px solid #00000040",
      },
    },
  };
  const conditionalRowStyles = [
    {
      when: (row) => row.id % 2 == 0,
      style: {
        backgroundColor: "#E3E9FF",
        color: "black",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    // You can also pass a callback to style for additional customization
    {
      when: (row) => row.calories < 400,
      style: (row) => ({ backgroundColor: row.isSpecial ? "pink" : "inerit" }),
    },
  ];

  return (
    <section className="data-table-section">
      <Box mt={"65px"}>
        <DataTable
          className={className ? className : "listDataTable"}
          data={data}
          columns={columns}
          pagination={true}
          customStyles={customStyles}
          noHeader={false}
          // paginationTotalRows={paginationTotalRows}
          // paginationRowsPerPageOptions={paginationRowsPerPageOptions}
          progressPending={loading}
          // progressComponent={
          //   <NoTableDataComponent columns={columns} loading={loading} />
          // }
          // striped={striped}
          highlightOnHover={true}
          fixedHeader={true}
          fixedHeaderScrollHeight={"60vh"}
          conditionalRowStyles={conditionalRowStyles}
          // onSort={customSort}
          sortIcon={<SwapVertIcon color="black" fontSize="10px" />}
          // selectableRowDisabled={selectableRowDisabled}
          // noDataComponent={
          //   <NoTableDataComponent columns={columns} text={"No Data Found"} />
          // }
        />{" "}
      </Box>
      {/* <Box
        className="flex-row"
        sx={{
          position: "absolute",
          top: "-65PX",
          width: "100%",
          minHeight: "56px",
          // gap: "40%",
        }}
      >
        <Box className="flex-row">
          <Typography variant="normal">All Employee List</Typography>
          <Box
            bgcolor={"#E3E9FF"}
            borderRadius={"50px"}
            pr={2}
            gap={1}
            className="flex-row"
            onClick={() => setOpen("cp")}
          >
            <Box borderRadius={"100%"} bgcolor={"#0038FF"} p={0}>
              <AddIcon sx={{ color: "white" }} />
            </Box>
            <Box>
              <Typography variant="xs">Add Filter</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="flex-row" gap={2} fontSize={"12px"}>
          <Box className="flex-column">
            <IconButton>
              <SearchIcon />
            </IconButton>
            search
          </Box>
          <Box className="flex-column">
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
            Export
          </Box>
        </Box>
      </Box> */}
    </section>
  );
};

export default TableData;
