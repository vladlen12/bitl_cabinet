import './Referrals.scss'
import {ReactComponent as Strucure1} from "../../assets/icons/strucure1.svg";
import {ReactComponent as Strucure2} from "../../assets/icons/strucure2.svg";
import {ReactComponent as Strucure3} from "../../assets/icons/strucure3.svg";
import {ReactComponent as Strucure4} from "../../assets/icons/strucure4.svg";
import React from "react";
import IconTabs from "./Tabs";

const ReferralsSection = () => (
  <section className="section section--referrals">
    <h1 className="h1">
      Refferals
    </h1>

    <div className="user-info board">
      <div className="title">
        Structure of personal invitations
      </div>
      <div className="currency-info">
        <div className="currency-info__item">
          <div className="icon">
            <Strucure1 />
          </div>
          <div className="title">
            New partners
          </div>
          <div className="value">
            133
          </div>
        </div>
        <div className="currency-info__item">
          <div className="icon">
            <Strucure2 />
          </div>
          <div className="title">
            Personally invited
          </div>
          <div className="value">
            30
          </div>
        </div>
        <div className="currency-info__item">
          <div className="icon">
            <Strucure3 />
          </div>
          <div className="title">
            Total partners
          </div>
          <div className="value">
            200
          </div>
        </div>
        <div className="currency-info__item">
          <div className="icon">
            <Strucure4 />
          </div>
          <div className="title">
            Group partners
          </div>
          <div className="value">
            120
          </div>
        </div>
      </div>
    </div>

    <div className="structure-info board">
      <div className="title">
        Structure Users
      </div>
      <div className="search-bar-wrapper board">
        <div className="input-search-wrapper">
          <input className="search-bar" type="text" placeholder="Serch user"/>
        </div>

        <div className="tabs-wrapper">
          <IconTabs />
        </div>
      </div>
    </div>

  </section>
)

export default ReferralsSection