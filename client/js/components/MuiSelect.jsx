import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
export const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);
    console.log({ countries });
    const handleChange = (e) => {
        const value = e.target.value;
        setCountry(e.target.value);
    };
    const handleManyChange = (e) => {
        const value = e.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    };
    //for api integration map over the key values pairs from api then render them in the jsx
    return (<Box>
    <Box width='250px'>
        <TextField label='Select countries' select value={countries} onChange={handleManyChange} fullWidth SelectProps={{
            multiple: true
        }}>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
        {/*
                <Box width='250px' marginTop={2}>
                    <TextField label='Select country' select value={country} onChange={handleChange} fullWidth size='small' color='secondary' helperText='please select a country' error>
                        <MenuItem value='IN'>India</MenuItem>
                        <MenuItem value='US'>USA</MenuItem>
                        <MenuItem value='AU'>Australia</MenuItem>
                    </TextField>
                </Box> */}
    </Box>);
};
