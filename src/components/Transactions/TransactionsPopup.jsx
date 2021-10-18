import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {ReactComponent as CloseIcon} from "../../assets/icons/Close.svg";
import {ReactComponent as Exchenge} from "../../assets/icons/Exchenge.svg";
import {TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export default function TransactionsPopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="btn btn--purple" onClick={handleClickOpen}>
        <Exchenge /> Transaction
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog"
        aria-describedby="dialog"
      >
        <div className="modal-wrapper board modal-wrapper--search">
          <div className="title">
            Withdrawal and deposit
          </div>
          <CloseIcon className="modal-close-icon" onClick={handleClose} />

          <div className="input-field">
            <TextField
              label="Address wallet"
              type="text"
              variant="outlined"
              className="textarea"
              defaultValue="v9ajmwyu4zldjhnnzzshkz7ghoodfl8bbssdg118dhdjj"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </div>

          <div className="input-field">
            <TextField
              className="textarea"
              label="Amount of payment"
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    UMI
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="balance">
            <div className="title">
              You balance
            </div>
            <div className="description">
              100 UMI
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