import {
  Autocomplete,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export default function SelectField({
  options = [],
  name,
  setValue,
  defaultValue,
  handleChange,
  register,
  watch,
  control,
  label,
  size,
}) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: true,
      }}
      render={(fields) => (
        <FormControl sx={{ width: "100%" }}>
          <InputLabel
            id="demo-simple-select-helper-label"
            error={fields.formState.errors[name]?.type}
          >
            {label}
          </InputLabel>
          <Select
            value={watch(name)}
            ref={fields.field.ref}
            {...fields.field}
            //   defaultValue={defaultValue?.id}
            onChange={handleChange}
            name={name}
            // displayEmpty
            labelId="demo-simple-select-helper-label"
            error={fields.formState.errors[name]?.type}
            id="demo-simple-select-helper"
            label={label}
            variant="outlined"
            size={size ?? "small"}
            sx={{
              width: "100%",
              background: "white",
              color: "black",
              borderRadius: "10px",
              fontSize: "14px !important",
            }}
            inputProps={{ style: { color: "black" }, "aria-label": "w" }}
          >
            <MenuItem value={defaultValue?.id}>{defaultValue?.name}</MenuItem>
            {Array(...options)?.map((item) => {
              return <MenuItem value={item?.id}>{item?.name}</MenuItem>;
            })}
          </Select>
          <FormHelperText error={fields.formState.errors[name]?.type}>
            {fields.formState.errors[name]?.type}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}
