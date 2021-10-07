import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import InputAdornment from "@mui/material/InputAdornment";
import {ReactComponent as CalendarIcon} from "../../assets/icons/Calendar.svg";

export default function DatePickerProfile() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={
          (params) =>
            <TextField
              {...params}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarIcon />
                  </InputAdornment>
                ),
              }}
            />
        }
      />
    </LocalizationProvider>
  );
}