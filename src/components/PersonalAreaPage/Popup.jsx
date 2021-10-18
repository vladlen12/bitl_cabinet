import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {ReactComponent as CloseIcon} from "../../assets/icons/Close.svg";
import TabPanelLogin from "./Tabs";

export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="btn btn--default" type="button" onClick={handleClickOpen}>Login</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog"
        aria-describedby="dialog"
      >
        <div className="modal-wrapper board modal-wrapper--login">
          <CloseIcon className="modal-close-icon" onClick={handleClose} />
          <div className="tabs-wrapper">
            <TabPanelLogin />
          </div>
        </div>
      </Dialog>
    </>
  );
}