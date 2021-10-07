import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FaqAccordion from "./Accordion"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function FaqTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-wrapper">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="All qestions" {...a11yProps(0)} />
          <Tab label="MLM qestions" {...a11yProps(1)} />
          <Tab label="Internet Marketing" {...a11yProps(2)} />
        </Tabs>
      <TabPanel value={value} index={0}>
        <FaqAccordion />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FaqAccordion />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FaqAccordion />
      </TabPanel>
    </div>
  );
}