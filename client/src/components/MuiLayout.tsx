import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  return (
    // row and row reverse for the direction reversed from the right and  column reverse to arrange at the bottom
    // flex direction column default styling
    // spacing ration is 1:8 px so 2 is 16 pixels
    // padding margin are all supported by the stack component specify of them on props
    // elevation prop manages the lifted border shadow
    //paper is also used to build the card component in material UI
    <Paper sx={{padding: '32px'}} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": { backgroundColor: "primary.light" },
          }}
        >
          {" "}
          Coding Dojo
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          {" "}
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}> Item 1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}> Item 2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}> Item 3</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}> Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
// margin vertical my={} vs mx{} horizontal p={} for padding 1:8px ratio
// grid component uses flexbox module it consists of 12 columns each item int he gride can take up one or more columns as its width
// there are 5 breakpoints for grid each corresponding to a certain device width xs for mobile device size, sm for tablet, md for desktop, lg and xl for larger monitors
// we can assign integer values to each breakpoint which indicates how many of the 12 available columns are occupied 
// example xs={6} it stands for mobile device and above encapsulating all the sizes and being responsive 6 = 50%
// leaving it xs across all grid makes them take up equal sizes xs='auto'
// rowSpacing does horizontal spacing and columnSpacing is for vertical 