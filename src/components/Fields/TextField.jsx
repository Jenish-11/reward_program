import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export default function StringField({ name, control }) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{
          required: true,
        }}
        render={({ field, formState }) => (
          <TextField
            {...field}
            type="text"
            fullWidth
            name={name}
            error={formState.errors[name]?.type}
            helperText={formState.errors[name]?.type}
            variant="standard"
            multiline
            minRows={5}
            sx={{
              width: "100%",
              border: 0,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  border: 0,
                },
              },
            }}
            InputProps={{
              disableUnderline: true,
            }}
            inputProps={{
              style: {
                padding: "14px",
              },
            }}
            placeholder="Type Your Messages"
          />
        )}
      />
    </>
  );
}
