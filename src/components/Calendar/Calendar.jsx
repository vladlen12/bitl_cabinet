import React, {useEffect, useState} from "react"
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@mui/lab/StaticDateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import useWindowSize from "../../hooks/useWindowSize";
import "./Calendar.scss"

const WINDOW_DESKTOP_SIZE = 768;

export default function StaticDateRangePickerDemo() {
  const [value, setValue] = React.useState([null, null]);
  const [isDesktop,setIsDesktop] = useState();
  const {width} = useWindowSize()

  useEffect(() => {
    setIsDesktop(width >= WINDOW_DESKTOP_SIZE)
  },[width])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {
        !isDesktop ?
          <StaticDateRangePicker
            displayStaticWrapperAs="mobile"
            value={value}

            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
          :
          <StaticDateRangePicker
            displayStaticWrapperAs="desktop"
            value={value}

            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
      }
    </LocalizationProvider>
  );
}