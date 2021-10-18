import React from 'react';
import styles from './DistributionBtns.module.scss'
import Apple from '../../../assets/apple.svg'
import Android from '../../../assets/android.svg'
import AppleDark from '../../../assets/AppleDark.svg'
import AndroidDark from '../../../assets/AndroidDark.svg'
import {Link} from "react-router-dom";

function DistributionBtns(props) {
    return (
      <div className="app-store">
        <div className="app-store__item">
          <div className={styles.distributionBtns}>
            <Link className={styles.distributionButton}>
              <img src={Apple} alt="icon"/>
            </Link>
            <Link className={styles.distributionButton}>
              <img src={Android} alt="icon"/>
            </Link>
          </div>
        </div>

        <div className="app-store__item app-store__item--dark">
          <div className={styles.distributionBtns}>
            <Link className={styles.distributionButton}>
              <img src={AppleDark} alt="icon"/>
            </Link>
            <Link className={styles.distributionButton}>
              <img src={AndroidDark} alt="icon"/>
            </Link>
          </div>
        </div>

      </div>

    );
}

export default DistributionBtns;