import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const MuiTextField = () => {
  const [viewer, setViewer] = useState(false);
  const [value, setValue] = useState("");
  const handleVisibility = () => {
    setViewer((prev) => !prev);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Password"
          type="password"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        <TextField
          label="Read only"
          type="password"
          InputProps={{ readOnly: true }}
          required
          helperText="Do not share your Password with anyone"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Lbs.</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
          type={viewer ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment
                color="secondary"
                position="end"
                onClick={handleVisibility}
              >
                {viewer ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack></Stack>
    </Stack>
  );
};
