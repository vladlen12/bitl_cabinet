import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {ReactComponent as CloseIcon} from "../../assets/icons/Close.svg";
import SearchPickers from "./Picker";
import {TextField} from "@mui/material";
import TransactionSelect from "./TransactionSelect";

export default function SearchDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="btn" type="button" onClick={handleClickOpen}>more Search</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog"
        aria-describedby="dialog"
      >
        <div className="modal-wrapper board">
          <div className="title">
            Withdrawal and deposit
          </div>
          <CloseIcon className="modal-close-icon" onClick={handleClose} />

          <SearchPickers />

          <TransactionSelect />

          <div className="form-input-wrapper">
            <div className="form-item">
              <TextField className="textarea" label="From" variant="outlined" defaultValue="126 UMI" />
            </div>
            <div className="form-item">
              <TextField className="textarea" label="To" variant="outlined" defaultValue="325 UMI" />
            </div>
          </div>

          <div className="btn-wrapper">
            <div className="btn btn--warning">
              cancel
            </div>
            <div className="btn btn--default">
              Submit
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}