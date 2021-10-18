import React from "react"
import Popover from '@mui/material/Popover';
import {ReactComponent as Calendar} from "../../assets/icons/Calendar.svg";
import {ReactComponent as ArrowRight} from "../../assets/icons/ArrowRight.svg";
import StaticDateRangePickerDemo from "./Calendar";

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
      <Calendar aria-describedby={id}  onClick={handleClick} className="calendar-icon" />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{ paper: "calendar-popover" }}
      >
        <div className="calendar-wrapper">
          <div className="title">
            Start date <ArrowRight /> End date
          </div>
          <StaticDateRangePickerDemo />
        </div>

      </Popover>
    </>
  );
}