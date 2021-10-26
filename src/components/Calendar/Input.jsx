import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {ReactComponent as Calendar} from "../../assets/icons/Calendar.svg";
import React from "react";
import {ReactComponent as ArrowRight} from "../../assets/icons/ArrowRight.svg";
import StaticDateRangePickerDemo from "./Calendar";

export default function CustomDateRangeInputs() {

  return (
    <div className="input-field">
      <PopupState variant="popover" popupId="popup-popover">
        {(popupState) => (
          <>
            <TextField
              label="Amount address"
              type="text"
              variant="outlined"
              className="textarea"
              defaultValue="Choce Period"
              fullWidth
              {...bindTrigger(popupState)}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Calendar className="calendar-icon" />
                  </InputAdornment>
                ),
              }}
            />
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
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
        )}
      </PopupState>
    </div>
  );
}