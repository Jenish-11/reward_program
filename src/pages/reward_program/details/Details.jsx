import { Box } from "@mui/system";
import React, { useEffect } from "react";
import TableData from "../../../components/tables/TableData";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../../redux/services/employeeService";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function Details() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => ({
    data: state.employeeSlice.getEmployee?.data,
    loading: state.employeeSlice.getEmployee?.isFetching,
  }));
  const columns = [
    {
      id: 1,
      name: "Employee Name",
      selector: (row) => (
        <Box className="flex-row" gap={1}>
          <MoreHorizIcon /> {row.name}
        </Box>
      ),
      sortable: true,
      omit_name: "name",
    },
    {
      id: 2,
      name: "Employee Id",
      selector: (row) => row.employee_id,
      sortable: true,
      omit_name: "company_name",
    },
    {
      id: 3,
      name: "Received Points",
      selector: (row) => row.recieved_points,
      sortable: true,
      omit_name: "recieved_points",
    },
    {
      id: 4,
      name: "Redeemed Points",
      selector: (row) => row.redeemed_points,
      sortable: true,
      omit_name: "default_email",
    },
    {
      id: 5,
      name: "Balance Points",
      selector: (row) => row.balance_points,
      sortable: true,
      omit_name: "balance_points",
    },
  ];
  useEffect(() => {
    dispatch(getEmployee());
  }, []);
  return (
    <>
      <Box>
        <TableData columns={columns} data={data ?? []} loading={loading} />
      </Box>
    </>
  );
}
