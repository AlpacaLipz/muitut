import React from "react";
import { Card, Box, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
          <CardMedia
          component='img' height='140' image='https://a-z-animals.com/media/alpalca-2.jpg' alt='alpaca' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {" "}
            Coding Dojo{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
