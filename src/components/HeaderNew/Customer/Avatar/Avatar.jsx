import React from 'react';
import {makeStyles} from "@mui/styles";
import DrawerMenu from "../../../Drawer/Drawer";
import {Progress} from "antd";
import customer from "../../../../assets/icons/customer.svg";
import "./Avatar.module.scss"
import cx from "classnames";


function Avatar({level, avatar, isOpen}) {
    const useStyles = makeStyles(generateStyles)
    const classes = useStyles()
    const cxMenuTitle = cx("menu-title",classes.menuTitle)

    function generateStyles() {
        return {
            avatar: {
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                transform: isOpen ? `translateY(-150%)` : 'translateY(0)',
                top: isOpen && '-40%',
                left: isOpen && '36.5vw',
                translateX: "calc(100% - 66.9px)",
                position: isOpen ? "absolute" : 'relative',
                transition: 'transform 0.3s ease-in-out',
            },
            menuTitle: {
                fontFamily: 'Gilroy',
                fontSize: "14px",
                lineHeight: '24px',
                color: '#51525C',
            },
            toggleWrapper: {
                position: "absolute",
                top: 0,
                left: 0,
                '@media (min-width: 1360px)' : {
                    display: 'none'
                }
            }
        }
    }

    return (
        isOpen
            ?
            <p className={cxMenuTitle}>Menu</p>
            :
                  <div className={classes.avatar}>
                      <div className="user-pic user-pic--avatar">
                          <Progress
                            type="circle"
                            strokeWidth={6}
                            width={40}
                            strokeColor={{
                                '0': '#5851FF',
                            }}
                            percent={56}
                            format={() => (
                              <img src={customer} alt="customer"/>
                            )}
                          />
                      </div>
                      <div className={classes.toggleWrapper}>
                          <DrawerMenu />
                      </div>
                  </div>
    );
}

export default Avatar;