import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SelectField from "../Fields/SelectField";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployee,
  getEmployeeByTeam,
} from "../../redux/services/employeeService";
import { getTeams } from "../../redux/services/teamService";
import { useForm, useFormContext } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
//icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function SummaryFilter({ setTotal, setBalnce, setUtilized }) {
  const { setValue, watch, register, control, reset } = useForm({
    defaultValues: {
      employee: "all",
      team: "all",
    },
  });
  const dispatch = useDispatch();
  const { employee, team } = useSelector((state) => ({
    employee: state.employeeSlice.getEmployee?.data,
    team: state.teamSlice.getTeams.data,
  }));
  let defaultValueEmp = { id: "all", name: "All Employees" };
  let defaultValueTeam = { id: "all", name: "All Teams" };

  const handleChange = async (e, name) => {
    try {
      setValue(name, e.target.value);
      console.log(watch("employee"));
      console.log(watch("team"));
      if (name == "team") {
        setValue("employee", "all");
      }
      if (watch("team") == "all" || watch("team") == undefined) {
        dispatch(getEmployee());
        dispatch(getTeams());
      }
      //   else if(watch("team")!="all"){

      //   }
      else {
        let res = await dispatch(getEmployeeByTeam(watch("team"))).unwrap();
      }
      //   if (watch("employee") != "all" && watch("employee") != undefined) {
      let total = 0;
      let utilized = 0;
      let balance = 0;
      if (watch("employee") != "all" && watch("employee") != undefined) {
        employee?.map((item, i) => {
          if (watch("employee") == item?.id) {
            total += item.recieved_points;
            utilized += item.redeemed_points;
            balance += item.balance_points;
          }

        });

        setTotal(total);
        setUtilized(utilized);
        setBalnce(balance);
      }


    } catch (error) {}
  };
  useEffect(() => {
    dispatch(getEmployee());
    dispatch(getTeams());
  }, []);
  useEffect(() => {
    if (watch("team") == "all" && watch("employee") != "all") {
      let total = 0;
      let utilized = 0;
      let balance = 0;
      employee?.map((item, i) => {
        if (watch("employee") == item?.id) {
          total += item.recieved_points;
          utilized += item.redeemed_points;
          balance += item.balance_points;
        }
      });
      setTotal(total);
      setUtilized(utilized);
      setBalnce(balance);
    }
    if (
      (watch("team") != "all" && watch("employee") == "all") ||
      (watch("team") == "all" && watch("employee") == "all")
    ) {
      let total = 0;
      let utilized = 0;
      let balance = 0;
      employee?.map((item, i) => {
        total += item.recieved_points;
        utilized += item.redeemed_points;
        balance += item.balance_points;
      });
      setTotal(total);
      setUtilized(utilized);
      setBalnce(balance);
    }
  }, [employee, team]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="medium" component={"span"}>
        Summary
      </Typography>
      <Typography component={"span"} fontSize={"12px"} sx={{ opacity: "0.4" }}>
        Filter by
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", lg: "space-between" },
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 2,width:{xs:"100%",md:"50%",lg:"30%"} }}>
          <SelectField
            options={team}
            handleChange={(e) => handleChange(e, "team")}
            name={"team"}
            setValue={setValue}
            watch={watch}
            register={register}
            defaultValue={defaultValueTeam}
            control={control}
          />
          <SelectField
            options={employee}
            defaultValue={defaultValueEmp}
            name={"employee"}
            setValue={setValue}
            watch={watch}
            register={register}
            control={control}
            handleChange={(e) => handleChange(e, "employee")}
          />
        </Box>
        <Box className="flex-row" fontSize={"15px !important"} gap={2}>
          {" "}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={dayjs()}
              format="MMM D, YYYY"
              slots={{
                openPickerIcon: ArrowDropDownIcon,
              }}
              sx={{ border: "none", display: "flex", width: "140px" }}
              slotProps={{
                textField: {
                  size: "small",
                  variant: "standard",
                  InputProps: { disableUnderline: true },
                },
              }}
            />
            <DatePicker
              defaultValue={dayjs()}
              format="MMM D, YYYY"
              slots={{
                openPickerIcon: ArrowDropDownIcon,
              }}
              sx={{ border: "none", width: "140px" }}
              slotProps={{
                textField: {
                  size: "small",
                  variant: "standard",
                  InputProps: { disableUnderline: true },
                },
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );
}
