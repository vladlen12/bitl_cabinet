import React from 'react';
import customer from '../../../assets/icons/customer.svg'
import Avatar from "./Avatar/Avatar";
import styles from './Customer.module.scss'
import cx from 'classnames'

const cxHeader = cx("menu-user-name",styles.customerName)

function Customer({name,lvl}) {
    return (
        <div className={styles.customer}>
            <Avatar avatar={customer} level={70}/>
            <div className={styles.info}>
                <p className={cxHeader}>{name}</p>
                <div className={styles.level}>
                    <p className={styles.levelText}>{lvl}</p>
                </div>
            </div>
        </div>
    );
}

export default Customer;