import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ReactComponent as Tab1} from '../../assets/icons/tab1.svg';
import {ReactComponent as Tab2} from '../../assets/icons/tab2.svg';
import Saving from "../../assets/icons/tab3.svg"
import Info from "../../assets/icons/info.svg"
import Close from "../../assets/icons/Close.svg"
import {Progress} from "antd";
import customer from "../../assets/icons/customer.svg";
import PaginationRounded from "../Pagination/Pagination";
import CustomizedTreeView from "./Tree";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<Tab1 />} {...a11yProps(0)} />
          <Tab icon={<Tab2 />} {...a11yProps(1)} />
          <div className="tab-item">
            <img src={Saving} alt="icon"/>
          </div>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="table-wrapper table-wrapper--tree">
          <div className="table">
            <div className="table-head">
              <div className="col-1 table-col">
                Nickname
              </div>
              <div className="col-2 table-col">
                BIO
              </div>
              <div className="col-3 table-col">
                Status
              </div>
              <div className="col-4 table-col">
                line
              </div>
              <div className="col-5 table-col">
                partner
              </div>
              <div className="col-6 table-col">
                P.V.
              </div>
              <div className="col-7 table-col">
                G.V.
              </div>
              <div className="col-8 table-col">
                Sponsor
              </div>
            </div>
            <CustomizedTreeView />
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

        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="info-block">
          <img src={Info} alt="icon"/>
          <div className="content">
            <strong>There are more than 5000 users in your structure, congratulations! Excellent result!</strong>
            To make the partner structure load faster, we displayed it in a tabular form. At any time, you can return to the original display, but in this case, the speed of downloading data will significantly decrease and will depend on the capabilities of your browser.
          </div>
          <div className="close-icon">
            <img src={Close} alt="icon"/>
          </div>

        </div>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Nickname</th>
                <th>BIO</th>
                <th>Status</th>
                <th className="text-center">line</th>
                <th>partner</th>
                <th>P.V.</th>
                <th>G.V.</th>
                <th>Sponsor</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td className="td-1">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
              <td className="td-2">William Lawson</td>
              <td className="td-3">
                <div className="label black-600-bg">1 lvl</div>
              </td>
              <td className="td-4">-</td>
              <td className="td-5">50 | 37 | 10</td>
              <td>30</td>
              <td>200</td>
              <td>
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
            </tr>
            <tr className="table-new">
              <td className="td-1">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
                <div className="label new">
                  new
                </div>
              </td>
              <td className="td-2">William Lawson</td>
              <td className="td-3">
                <div className="label black-600-bg">1 lvl</div>
              </td>
              <td className="td-4">-</td>
              <td className="td-5">50 | 37 | 10</td>
              <td>30</td>
              <td>200</td>
              <td>
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
            </tr>
            <tr>
              <td className="td-1">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
              <td className="td-2">William Lawson</td>
              <td className="td-3">
                <div className="label black-600-bg">1 lvl</div>
              </td>
              <td className="td-4">-</td>
              <td className="td-5">50 | 37 | 10</td>
              <td>30</td>
              <td>200</td>
              <td>
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
            </tr>
            <tr>
              <td className="td-1">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
              <td className="td-2">William Lawson</td>
              <td className="td-3">
                <div className="label black-600-bg">1 lvl</div>
              </td>
              <td className="td-4">-</td>
              <td className="td-5">50 | 37 | 10</td>
              <td>30</td>
              <td>200</td>
              <td>
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
            </tr>
            <tr>
              <td className="td-1">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
              <td className="td-2">William Lawson</td>
              <td className="td-3">
                <div className="label black-600-bg">1 lvl</div>
              </td>
              <td className="td-4">-</td>
              <td className="td-5">50 | 37 | 10</td>
              <td>30</td>
              <td>200</td>
              <td>
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
            </tr>
            <tr>
              <td className="td-1">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
              <td className="td-2">William Lawson</td>
              <td className="td-3">
                <div className="label black-600-bg">1 lvl</div>
              </td>
              <td className="td-4">-</td>
              <td className="td-5">50 | 37 | 10</td>
              <td>30</td>
              <td>200</td>
              <td>
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
            </tr>
            <tr className="table-delete">
              <td className="td-1">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
                <div className="label delete">
                  deleted
                </div>
              </td>
              <td className="td-2">William Lawson</td>
              <td className="td-3">
                <div className="label black-600-bg">1 lvl</div>
              </td>
              <td className="td-4">-</td>
              <td className="td-5">50 | 37 | 10</td>
              <td>30</td>
              <td>200</td>
              <td>
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
            </tr>
            <tr>
              <td className="td-1">
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
              <td className="td-2">William Lawson</td>
              <td className="td-3">
                <div className="label black-600-bg">1 lvl</div>
              </td>
              <td className="td-4">-</td>
              <td className="td-5">50 | 37 | 10</td>
              <td>30</td>
              <td>200</td>
              <td>
                <div className="user-info">
                  <div className="user-pic">
                    <Progress
                      type="circle"
                      strokeWidth={6}
                      width={32}
                      strokeColor={{
                        '15%': '#FF5655',
                        '45%': '#E3E3E7',
                      }}
                      percent={15}
                      format={() => (
                        <img src={customer} alt=""/>
                      )}
                    />

                  </div>

                  piterparker
                </div>
              </td>
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
      </TabPanel>
    </Box>
  );
}