import './Transactions.scss'
import React from "react";
import TextField from "@mui/material/TextField";
import {ReactComponent as ArrowLeft} from "../../assets/icons/ArrowLeft.svg";
import savingIcon from "../../assets/icons/Saving.svg";
import PaginationRounded from "../Pagination/Pagination";
import SearchPopup from "./SearchPopup";
import {Link} from "react-router-dom";

export default function TransactionsSectionOne() {
  return (
    <section className="section section--transactions">

      <h1 className="h1">
        <Link to="/transactions"><ArrowLeft /></Link> All transaction
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
              <TextField
                className="textarea"
                label="Search parameter"
                variant="outlined"
                fullWidth
              />
            </div>

            <SearchPopup />
          </div>
        </div>

      </div>

      <div className="board board--bonus">
        <div className="title">
          Transaction list
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
                  <div className="table-item-circle marina-900-bg " />
                  Team bonus
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
                  <div className="table-item-circle main-900-bg" />
                  Deposit
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
                  <div className="table-item-circle warning-900-bg" />
                  Withdraw
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
                  <div className="table-item-circle marina-900-bg" />
                  Team bonus
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
                  <div className="table-item-circle main-900-bg" />
                  Deposit
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
                  <div className="table-item-circle main-900-bg" />
                  Deposit
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
                  <div className="table-item-circle marina-900-bg" />
                  Team bonus
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
                  <div className="table-item-circle marina-900-bg" />
                  Team bonus
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
                  <div className="table-item-circle warning-900-bg" />
                  Withdraw
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