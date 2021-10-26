import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';
import {Select} from "@mui/material";

const names = [
  'All',
  'Personal volume',
  'Group volume',
];

export default function VolumeSelect() {
  const [state, setState] = React.useState("All");

  const handleChange = (event) => {
    setState(event.target.value);
  };


  return (
    <FormControl
      fullWidth
      className="custom-select textarea"
    >
      <InputLabel shrink>Volume type</InputLabel>
      <Select
        value={state}
        onChange={handleChange}
        renderValue={(selected) => selected}
        defaultValue="All"
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          getContentAnchorEl: null,
          classes: { paper: "custom-select__dropdown" }
        }}
      >
        {names.map((name) => {
          return (
            <MenuItem key={name} value={name}>
              <Checkbox checked={state.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          )}
        )}
      </Select>
    </FormControl>
  );
}