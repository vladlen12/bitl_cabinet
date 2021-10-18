import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";
import ScrollToTop from "../Footer/ScrollToTop";

export default function CheckboxLabels() {
  return (
    <FormGroup className="checkbox-wrapper">
      <ScrollToTop />
      <FormControlLabel control={<Checkbox defaultChecked />}
        label={
          <div className="checkbox-label">
            <span>I have read the </span>
            <Link to="/terms-of-use">terms of use</Link>
          </div>
        }
      />
      <FormControlLabel control={<Checkbox />} label={
        <div className="checkbox-label">
          <span>I have read the </span>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      } />
    </FormGroup>
  );
}