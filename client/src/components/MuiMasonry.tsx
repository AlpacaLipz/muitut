import React from "react";
import { Box, Paper } from "@mui/material";
import { Masonry } from "@mui/lab";

const heights = [11, 17, 90, 69, 20, 33, 92, 33, 70, 80, 30, 40, 20];

export const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1} >
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height,
              border: "1px solid",
            }}
          >
            {" "}
            {index + 1}{" "}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};
