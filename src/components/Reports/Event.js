import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Checkbox from '@mui/material/Checkbox';
import {Select} from "@mui/material";

const names = [
  {
    name: "All",
    color: "",
  },
  {
    name: "Deposit",
    color: "item-circle main-900-bg",
  },
  {
    name: "Withdraw",
    color: "item-circle warning-900-bg",
  },
  {
    name: "Global bonus",
    color: "item-circle accent-900-bg",
  },
  {
    name: "Sam rank",
    color: "item-circle pink-900-bg",
  },
];

export default function EventSelect() {
  const [state, setState] = React.useState("All");

  const handleChange = (event) => {
    setState(event.target.value);
  };


  return (
    <FormControl
      fullWidth
      className="custom-select textarea"
    >
      <InputLabel shrink>Event</InputLabel>
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
            <MenuItem key={name.name} value={name.name}>
              <Checkbox checked={state.indexOf(name.name) > -1} />
              <div className="type">
                <div className={`${name.color}`} />
                {name.name}
              </div>
            </MenuItem>
          )}
        )}
      </Select>
    </FormControl>
  );
}