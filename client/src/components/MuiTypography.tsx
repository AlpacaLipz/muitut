import React from "react";
import { Typography } from "@mui/material";
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        This data is purely for research and development only. Please do not use
        without permission of the author. I like soup. Also check out my
        soundcloud mixtape. Thank you, have a wonderful day.
      </Typography>
      <Typography variant="body2">
        Meet our alpacas! We have a diverse herd of fluffy friends, each with
        their own unique personality. Some of our favorites include Alfonso, a
        mischievous young alpaca who loves to play; Peruvian Princess, a regal
        beauty with a luxurious coat; and Dolly, a sweet and gentle alpaca who
        loves to be petted. Our herd is growing all the time, so be sure to
        check back often to meet our newest arrivals!
      </Typography>
    </div>
  );
};
