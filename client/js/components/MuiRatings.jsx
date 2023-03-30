import React, { useState } from 'react';
import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export const MuiRatings = () => {
    const [value, setValue] = useState(3);
    console.log({ value });
    const handleChange = (_e, newValue) => {
        setValue(newValue);
    };
    return (<Stack spacing={2}>
        <Rating value={value} onChange={handleChange} precision={0.25} size='large' icon={<FavoriteIcon fontSize='inherit' color='error'/>} emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>} highlightSelectedOnly/>
    </Stack>);
};
