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
    name: "Team bonus",
    color: "item-circle marina-900-bg",
  },
  {
    name: "Withdraw",
    color: "item-circle warning-900-bg",
  },
  {
    name: "Deposit",
    color: "item-circle main-900-bg",
  },
];

export default function TransactionSelect() {
  const [state, setState] = React.useState("All");

  const handleChange = (event) => {
    setState(event.target.value);
  };


  return (
    <FormControl
      fullWidth
      className="custom-select textarea"
    >
      <InputLabel shrink>Transaction</InputLabel>
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