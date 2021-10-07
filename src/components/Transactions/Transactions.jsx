import './Transactions.scss'
import React from "react";
import {ReactComponent as Info1} from "../../assets/icons/info-1.svg";
import {ReactComponent as Info2} from "../../assets/icons/info-2.svg";
import {ReactComponent as Info3} from "../../assets/icons/info-3.svg";
import {ReactComponent as Info4} from "../../assets/icons/info-4.svg";
import {ReactComponent as Currency1} from "../../assets/icons/currency1.svg";
import {ReactComponent as Currency2} from "../../assets/icons/currency2.svg";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {ReactComponent as CopyIcon} from "../../assets/icons/Copy.svg";
import {ReactComponent as ArrowLeft} from "../../assets/icons/ArrowLeft.svg";
import savingIcon from "../../assets/icons/Saving.svg";
import PaginationRounded from "../Pagination/Pagination";
import TransactionsPopup from "./TransactionsPopup";
import SearchPopup from "./SearchPopup";
import {Link} from "react-router-dom";

export default function TransactionsSection() {
  return (
    <section className="section section--transactions">
      <h1 className="h1">
        Transactions
      </h1>

      <ul className="structure-info-list">
        <li className="board structure-info-list__item">
          <div className="icon">
            <Info1 />
          </div>
          <div className="title">
            Participants <span>(People)</span>
          </div>
          <div className="value">
            10 576
          </div>
        </li>

        <li className="board structure-info-list__item">
          <div className="icon">
            <Info2 />
          </div>
          <div className="title">
            Total coin <span>(UMI)</span>
          </div>
          <div className="value">
            105 670 004
          </div>
        </li>

        <li className="board structure-info-list__item">
          <div className="icon">
            <Info3 />
          </div>
          <div className="title">
            Staking <span>(Per month)</span>
          </div>
          <div className="value">
            30%
          </div>
        </li>

        <li className="board structure-info-list__item">
          <div className="icon">
            <Info4 />
          </div>
          <div className="title">
            Bonuses paid <span>(UMI)</span>
          </div>
          <div className="value">
            5 670 004
          </div>
        </li>
      </ul>

      <div className="container container--user-info">
        <div className="col">
          <div className="user-info board">
            <div className="title">
              Your balance
            </div>

            <div className="currency-info">
              <div className="currency-info__item">
                <div className="icon">
                  <Currency1 />
                </div>
                <div className="title">
                  Balance UMI coin
                </div>
                <div className="value">
                  100 UMI
                </div>
              </div>
              <div className="currency-info__item">
                <div className="icon">
                  <Currency2 />
                </div>
                <div className="title">
                  Balance Dollar ($)
                </div>
                <div className="value">
                  236 USD
                </div>
              </div>
            </div>

            <div className="input-field">
              <TextField
                label="Amount address"
                type="text"
                variant="outlined"
                className="textarea"
                defaultValue="v9ajmwyu4zldjhnnzzshkz7ghoodfl8bbssdg118dhdjj"
                fullWidth
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <CopyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="btn-wrapper">
              <TransactionsPopup />

              <div className="btn btn--default">
                all transaction
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="user-rate board">
            <div className="title">
              Last transaction
            </div>
            <div className="table">
              <div className="table-row">
                <div className="table-item">
                  transaction
                </div>
                <div className="table-item">
                  Amount
                </div>
                <div className="table-item">
                  Time
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">

                  <div className="type">
                    <div className="table-item-circle main-900-bg" />
                    Deposit
                  </div>
                </div>
                <div className="table-item">
                  236 UMI
                </div>
                <div className="table-item">
                  15.08.2021 - 16:35
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">

                  <div className="type">
                    <div className="table-item-circle warning-900-bg" />
                    Withdraw
                  </div>
                </div>
                <div className="table-item">
                  100 UMI
                </div>
                <div className="table-item">
                  15.08.2021 - 16:35
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">

                  <div className="type">
                    <div className="table-item-circle main-900-bg" />
                    Deposit
                  </div>
                </div>
                <div className="table-item">
                  236 UMI
                </div>
                <div className="table-item">
                  15.08.2021 - 16:35
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">

                  <div className="type">
                    <div className="table-item-circle warning-900-bg" />
                    Withdraw
                  </div>
                </div>
                <div className="table-item">
                  100 UMI
                </div>
                <div className="table-item">
                  15.08.2021 - 16:35
                </div>
              </div>
              <div className="table-row">
                <div className="table-item">

                  <div className="type">
                    <div className="table-item-circle main-900-bg" />
                    Deposit
                  </div>
                </div>
                <div className="table-item">
                  236 UMI
                </div>
                <div className="table-item">
                  15.08.2021 - 16:35
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="h1">
        <Link href="#"><ArrowLeft /></Link> All news
      </h1>

      <div className="search-wrapper board">
        <div className="title">
          Search transaction
        </div>

        <div className="search">
          <div className="course">
            <div className="course-item">
              <div className="title">
                Total transactions
              </div>
              <div className="value">
                1 000 000
              </div>
            </div>
            <div className="course-item">
              <div className="title">
                UMI transaction amount
              </div>
              <div className="value">
                1 256 879,00 UMI
              </div>
            </div>
          </div>
          <div className="board-panel__search">
            <div className="input-search-wrapper">
              <input className="search-bar" type="text" placeholder="Search parameter"/>
            </div>

            <SearchPopup />
          </div>
        </div>

      </div>

      <div className="board board--bonus">
        <div className="title">
          Received bonuses
          <img src={savingIcon} alt="icon"/>
        </div>

        <div className="table-wrapper">
          <table className="table table--statistic">
            <thead>
            <tr>
              <th>№</th>
              <th>Event</th>
              <th>amount</th>
              <th>From </th>
              <th>To </th>
              <th>Date / TIME </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>
            <tr>
              <td className="td-1">85.</td>
              <td className="td-2">
                <div className="type">
                  <div className="table-item-circle secondary-900-bg" />
                  Pertner bonus:
                </div>
              </td>
              <td className="td-3">10  UMI</td>
              <td className="td-4">v9ajmwyu4zldjhn...118dhdjj</td>
              <td className="td-5">
                v9ajmwyu4zldjhn...118dhdjj
              </td>
              <td className="td-6">21.01.2021 - 01:12</td>
            </tr>

            </tbody>
          </table>
        </div>
        <div className="pagination-wrapper">
          <div className="page-count">
            Rows per page:
            <input type="text" placeholder="10"/>
          </div>

          <div className="pagination">
            <PaginationRounded />
          </div>
        </div>
      </div>
    </section>
  );
}