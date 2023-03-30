import React, { useState } from "react";
import { Stack, Autocomplete, TextField, } from "@mui/material";
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}));
export const MuiAutoComplete = () => {
    const [value, setValue] = useState(null);
    const [skill, setSkill] = useState(null);
    console.log({ value });
    console.log({ skill });
    return (<Stack spacing={2} width="250px">
        <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label="Skills"/>} value={value} onChange={(e, newValue) => setValue(newValue)} //freeSolo param allows random text to be logged good for certain inputs
    />
        <Autocomplete options={skillsOptions} renderInput={(params) => <TextField {...params} label="Skills"/>} value={skill} onChange={(e, newValue) => setSkill(newValue)} //freeSolo param allows random text to be logged good for certain inputs
    />
      </Stack>);
};
