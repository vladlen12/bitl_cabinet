import React from "react"
import Popover from '@mui/material/Popover';
import {ReactComponent as Calendar} from "../../assets/icons/Calendar.svg";
import StaticDateTimePickerDemo from "./Calendar";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function CalendarPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'CalendarPopover' : undefined;

  return (
    <>
      <TextField
        label="Date"
        type="text"
        variant="outlined"
        className="textarea search-input"
        defaultValue="18 February 1985"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Calendar aria-describedby={id} onClick={handleClick} />
            </InputAdornment>
          ),
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        classes={{ paper: "calendar-popover" }}
      >
        <div className="calendar-wrapper calendar-wrapper--single">
          <StaticDateTimePickerDemo />
        </div>

      </Popover>
    </>
  );
}