import React, {useEffect, useState} from 'react';
import cx from 'classnames'
import Logo from "./Logo/Logo";
import Avatar from "./Customer/Avatar/Avatar";
import customer from '../../assets/icons/customer.svg'
import useWindowSize from "../../hooks/useWindowSize";
import constants from "../../constants/constants";
import DistributionBtns from "./DistributionBtns/DistributionBtns";
import Customer from "./Customer/Customer";
import Language from "./Language/Language";
import DrawerMenu from "../Drawer/Drawer"

import styles from './Header.module.scss'
import LoginDialog from "../PersonalAreaPage/Popup";
import DrawerNavigation from "../DrawerNavigation/Drawer";

function Header({commonClass}) {
    const [isDesktop,setIsDesktop] = useState();
    const {width} = useWindowSize()

    useEffect(() => {
        setIsDesktop(width >= constants.WINDOW_DESKTOP_SIZE)
    },[width])

    const cxHeader = cx(styles.header,{[commonClass]: commonClass})

    let header;

    !isDesktop
        ?
     header =  <>
         <div className={styles.header}>
             <DrawerNavigation />
             <Logo />
             <Avatar avatar={customer} />
         </div>

     </>
        :
        header = <>
            <div className={cxHeader}>
                <Logo/>
                <DistributionBtns/>
                <div style={{display: "flex", alignItems: "center"}}>
                    <LoginDialog />
                    <Language/>
                    <Customer name="william" lvl="7 LVL"/>
                </div>
                <DrawerMenu />
            </div>
        </>

    return (
        <>
            {header}
        </>
    );
}

export default Header;