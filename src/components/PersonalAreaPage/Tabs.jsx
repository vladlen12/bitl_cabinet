import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {ReactComponent as Warning} from "../../assets/icons/Warning.svg";
import CustomizedSwitches from "./Switch";
import CheckboxLabels from "./CheckBox";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function TabPanelLogin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Registration" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="input-field">
          <TextField
            label="Enter UMI wallet *"
            type="text"
            variant="outlined"
            className="textarea"
            defaultValue="v9ajmwyu4zldjhnnzzshkz7ghoodfl8bbssdg118dhdjj"
            fullWidth
          />
        </div>

        <div className="input-field">
          <TextField
            label="Enter UMI wallet *"
            type="text"
            variant="outlined"
            className="textarea"
            fullWidth
          />
        </div>
        <div className="btn-wrapper">
          <div className="btn btn--default">Continue</div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>

        <div className="attention-info">
          <Warning />
          Do you have a sponsor?
          <CustomizedSwitches />
        </div>

        <div className="input-field">
          <TextField
            label="Sponsor login"
            type="text"
            variant="outlined"
            className="textarea"
            fullWidth
          />
        </div>
        <div className="input-field">
          <TextField
            label="Your UMI cryptocurrency address *"
            type="text"
            variant="outlined"
            className="textarea"
            fullWidth
          />
        </div>
        <div className="input-field">
          <TextField
            label="Sign Phrase *"
            type="text"
            variant="outlined"
            className="textarea"
            fullWidth
          />
        </div>
        <div className="input-field">
          <TextField
            label="Enter Sign Phrase *"
            type="text"
            variant="outlined"
            className="textarea"
            fullWidth
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  generate
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="input-field">
          <TextField
            label="Enter your nickname *"
            type="text"
            variant="outlined"
            className="textarea"
            fullWidth
          />
        </div>

        <CheckboxLabels />
        <div className="btn-wrapper">
          <div className="btn btn--default">Continue</div>
        </div>
      </TabPanel>
    </>
  );
}