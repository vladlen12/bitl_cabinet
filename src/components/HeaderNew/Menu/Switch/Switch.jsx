import React from 'react';
import styles from './Switch.module.scss'

function Switch({isToggled, onToggle, onCLick}) {


    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={isToggled} onChange={onToggle} onClick={onCLick}/>
            <span className={styles.slider}/>
        </label>
    );
}

export default Switch;