import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import SelectField from "../../Fields/SelectField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../../redux/services/employeeService";
import { getTeams } from "../../../redux/services/teamService";

export default function PerformerCard({ team }) {
  const dispatch = useDispatch();
  const { employee, teams, awards } = useSelector((state) => ({
    employee: state.employeeSlice.getEmployee?.data,
    teams: state.teamSlice.getTeams?.data,
    awards: state.rewardSlice.getAwards?.data,
  }));
  React.useEffect(() => {
    dispatch(getEmployee());
    dispatch(getTeams());
  }, []);
  return (
    <>
      <Paper sx={{ px: 4, py: 5 }} className="paper-border">
        <Box className="flex-column" gap={4}>
          <Typography variant="high" textAlign={"center"}>
            Top 5 {team ? "Teams" : "Performers"}
          </Typography>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{ textField: { size: "small" } }}
                // onChange={(e, v) => {
                //   console.log(dayjs(e).format("DD/MM/YYYY"));
                //   setValue("date", dayjs(e).format("DD/MM/YYYY"), {
                //     shouldValidate: "true",
                //   });
                // }}
                defaultValue={dayjs()}
              />
            </LocalizationProvider>
          </Box>
          <Box>
            <Grid container rowSpacing={3}>
              {(team?teams:employee)?.map((data, i) => {

               if(i<=4) return (
                  <Grid key={i} item className="flex-row" justifyContent={"space-between"} gap={2} xs={12}>
                    <Box
                      className="flex-row"
                      sx={{
                        borderRadius: "100%",
                        p: 1,
                        border: "2px solid black",
                        width: "10px",
                        height: "10px",
                      }}
                      justifyContent={"center"}
                    >
                      {i+1}
                    </Box>
                    <Typography className="flex-row" variant="small">
                      {data?.name}
                    </Typography>
                    <Button
                      className="rounded-button"
                      sx={{ fontSize: "14px", px: 1, py: 0 }}
                    >
                      {data?.recieved_points}
                      {team&& 5000}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
