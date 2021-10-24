import React from 'react';
import styles from './Switch.module.scss'
import cx from 'classnames'

function Switch({isToggled, onToggle, onCLick}) {

  let switchMenu = cx("switch-menu",styles.slider);

    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={isToggled} onChange={onToggle} onClick={onCLick}/>
            <span className={switchMenu}/>
        </label>
    );
}

export default Switch;