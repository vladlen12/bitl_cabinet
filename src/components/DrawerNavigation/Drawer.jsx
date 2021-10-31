import Drawer from '@mui/material/Drawer';
import React from "react";
import {ReactComponent as Burger} from "../../assets/icons/Burger.svg"
import {ReactComponent as Close} from "../../assets/icons/Close.svg"

import "./DrawerNav.scss"
import Menu from "../HeaderNew/Menu/Menu";

export default function DrawerNavigation() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <>
      <Burger className="burger-menu" onClick={toggleDrawer} />

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className="drawer-wrapper drawer-wrapper--navigation">
          <div className="drawer-head">
            <Close onClick={toggleDrawer} />
            Menu
          </div>
          <Menu />
        </div>
      </Drawer>
    </>
  );
}