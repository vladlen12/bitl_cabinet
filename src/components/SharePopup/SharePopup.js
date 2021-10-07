import React from "react"
import Popover from '@mui/material/Popover';
import Share from "../../assets/icons/share.svg";
import Facebook from "../../assets/icons/social/Facebook.svg"
import Telegram from "../../assets/icons/social/Telegram.svg"
import Twitter from "../../assets/icons/social/Twitter.svg"
import Vkontakte from "../../assets/icons/social/Vkontakte.svg"

import "./SharePopup.scss"
import {Link} from "react-router-dom";

export default function SharePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'SharePopover' : undefined;

  return (
    <>
      <img src={Share} alt="share" aria-describedby={id}  onClick={handleClick} className="share-icon"/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        classes={{ paper: "share-popover" }}
      >
        <ul className="social">
          <li className="social-item">
            <Link href="#" className="social-link">
              <img src={Facebook} alt="Facebook"/>
              Facebook
            </Link>
          </li>

          <li className="social-item">
            <Link href="#" className="social-link">
              <img src={Telegram} alt="Telegram"/>
              Telegram
            </Link>
          </li>

          <li className="social-item">
            <Link href="#" className="social-link">
              <img src={Twitter} alt="Twitter"/>
              Twitter
            </Link>
          </li>

          <li className="social-item">
            <Link href="#" className="social-link">
              <img src={Vkontakte} alt="Vkontakte"/>
              Vkontakte
            </Link>
          </li>
        </ul>
      </Popover>
    </>
  );
}