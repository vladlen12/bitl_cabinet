import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {ReactComponent as CloseIcon} from "../../assets/icons/close-zoom.svg";
import {ReactComponent as ZoomIn} from "../../assets/icons/zoom-in.svg";
import {ReactComponent as ZoomOut} from "../../assets/icons/zoom-out.svg";
import Ellipse from "../../assets/Ellipse.png"

export default function ProfileDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="btn btn--default" onClick={handleClickOpen}>
        Upload
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog"
        aria-describedby="dialog"
      >
        <div className="modal-wrapper board modal-wrapper--profile">
          <div className="icons-wrapper">
            <ZoomIn />
            <ZoomOut />
          </div>
          <CloseIcon className="modal-close-icon" onClick={handleClose} />

          <div className="user-avatar">
            <img src={Ellipse} alt="pic"/>
          </div>

          <div className="btn-wrapper">
            <div className="btn btn--default">
              Chose file
            </div>

            <div className="btn btn--purple">
              upload
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}