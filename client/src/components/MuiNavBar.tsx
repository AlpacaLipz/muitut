import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MonitorHeartSharpIcon from '@mui/icons-material/MonitorHeartSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const MuiNavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box >
    <AppBar position="static" sx={{bgcolor: 'secondary.main',}}>
      <Toolbar>
        <IconButton size="large" edge='start' color="inherit" aria-label="logo">
          <MonitorHeartSharpIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Diabeat It
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Log-It</Button>
          <Button
            color="inherit"
            id="option-button"
            onClick={handleClick}
            aria-controls={open ? "option-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Options
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu id="option-menu" anchorEl={anchorEl} open={open} MenuListProps={{
          'aria-labelledby' : 'option-button'
        }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          >
          <MenuItem onClick={handleClose}>Edit User</MenuItem>
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
    </Box>
  );
};
