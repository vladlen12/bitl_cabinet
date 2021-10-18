import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {ReactComponent as CloseIcon} from "../../assets/icons/Close.svg";
import TextField from "@mui/material/TextField";
import {Progress} from "antd";
import customer from "../../assets/icons/customer.svg";
import PaginationRounded from "../Pagination/Pagination";

export default function ReferalsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="btn btn--default" type="button" onClick={handleClickOpen}>search</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog"
        aria-describedby="dialog"
      >
        <div className="modal-wrapper board modal-wrapper--referrals">
          <div className="title">
            Choose user
          </div>
          <CloseIcon className="modal-close-icon" onClick={handleClose} />
          <div className="board-panel__search">
            <div className="input-search-wrapper">
              <TextField
                className="textarea"
                label="Serch user"
                variant="outlined"
                fullWidth
              />
            </div>

            <button className="btn btn--default" type="button">submit</button>
          </div>
          <div className="table">
            <div className="table-row">
              <div className="table-item">
                №
              </div>
              <div className="table-item">
                Nikname
              </div>
              <div className="table-item">
                Date / Time
              </div>
            </div>

            <div className="table-row">
              <div className="table-item">
                1
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#FF5655',
                      }}
                      percent={13}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-item">
                2
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#FFD965',
                      }}
                      percent={35}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>
                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-item">
                3
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#38D47E',
                      }}
                      percent={45}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>
                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-item">
                4
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#0D05BA',
                      }}
                      percent={60}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>
                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-item">
                5
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#0D05BA',
                      }}
                      percent={50}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>
                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-item">
                6
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#BE22E2',
                      }}
                      percent={70}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>
                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-item">
                7
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#F6339A',
                      }}
                      percent={75}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>
                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-item">
                8
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#FFB865',
                      }}
                      percent={30}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>
                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-item">
                9
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#FFD965',
                      }}
                      percent={27}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>
                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
            <div className="table-row">
              <div className="table-item">
                10
              </div>
              <div className="table-item">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '0': '#9A9BA2',
                      }}
                      percent={5}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>
                  piterparker
                </div>
              </div>
              <div className="table-item">
                <span>15.08.2021 - 16:35</span>
              </div>
            </div>
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
      </Dialog>
    </>
  );
}