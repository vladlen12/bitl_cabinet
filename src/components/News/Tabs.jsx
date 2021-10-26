import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomSelect from "../Select/selsect";
import TextField from "@mui/material/TextField";
import NewsImg from "../../assets/news/news.png";
import SharePopover from "../SharePopup/SharePopup";
import PaginationRounded from "../Pagination/Pagination";
import {Link} from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function TabPanelMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="All News" {...a11yProps(0)} />
          <Tab label="MLM News" {...a11yProps(1)} />
          <Tab label="Crypto" {...a11yProps(2)} />
          <Tab label="Investments" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="board-panel">
          <div className="board-panel__select">
            <CustomSelect />
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

            <button className="btn btn--default" type="button">submit</button>
          </div>
        </div>

        <div className="board-body">
          <div className="content">
            <div className="article-wrapper">
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                  <div className="article-content">
                    <Link to="/news-one">
                      <div className="title">
                        Aave, Curve, PoolTogether, and Sushi Among...
                      </div>
                    </Link>
                    <Link to="/news-one">
                      <div className="description">
                        Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                      </div>
                    </Link>
                    <div className="article-data">
                      <div className="time">
                        26 jun 2020
                      </div>
                      <div className="tag">
                        Cryptoeconomics
                      </div>
                      <div className="share">
                        <SharePopover />
                      </div>
                    </div>
                  </div>
                </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="tags-wrapper">
              <div className="title">
                Tags
              </div>
              <div className="tags">
                <div className="tags-item is-active">
                  All
                </div>
                <div className="tags-item">
                  Cryptoeconomics
                </div>
                <div className="tags-item">
                  Business
                </div>
                <div className="tags-item">
                  Investments
                </div>
                <div className="tags-item">
                  Business strategies
                </div>
                <div className="tags-item">
                  Fintech
                </div>
                <div className="tags-item">
                  Marketing
                </div>
                <div className="tags-item">
                  Control
                </div>
                <div className="tags-item">
                  Dewelopment
                </div>
                <div className="tags-item">
                  IT
                </div>
                <div className="tags-item">
                  Control
                </div>
                <div className="tags-item">
                  Idea  and case
                </div>
                <div className="tags-item">
                  NFT
                </div>
                <div className="tags-item">
                  Start Up
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="board-footer">
          <div className="page-count">
            Rows per page:
            <input type="text" placeholder="10"/>
          </div>

          <div className="pagination">
            <PaginationRounded />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="board-panel">
          <div className="board-panel__select">
            <CustomSelect />
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

            <button className="btn btn--default" type="button">submit</button>
          </div>
        </div>

        <div className="board-body">
          <div className="content">
            <div className="article-wrapper">
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="tags-wrapper">
              <div className="title">
                Tags
              </div>
              <div className="tags">
                <div className="tags-item is-active">
                  All
                </div>
                <div className="tags-item">
                  Cryptoeconomics
                </div>
                <div className="tags-item">
                  Business
                </div>
                <div className="tags-item">
                  Investments
                </div>
                <div className="tags-item">
                  Business strategies
                </div>
                <div className="tags-item">
                  Fintech
                </div>
                <div className="tags-item">
                  Marketing
                </div>
                <div className="tags-item">
                  Control
                </div>
                <div className="tags-item">
                  Dewelopment
                </div>
                <div className="tags-item">
                  IT
                </div>
                <div className="tags-item">
                  Control
                </div>
                <div className="tags-item">
                  Idea  and case
                </div>
                <div className="tags-item">
                  NFT
                </div>
                <div className="tags-item">
                  Start Up
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="board-footer">
          <div className="page-count">
            Rows per page:
            <input type="text" placeholder="10"/>
          </div>

          <div className="pagination">
            <PaginationRounded />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="board-panel">
          <div className="board-panel__select">
            <CustomSelect />
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

            <button className="btn btn--default" type="button">submit</button>
          </div>
        </div>

        <div className="board-body">
          <div className="content">
            <div className="article-wrapper">
              <article className="article">
                <div className="article-image">
                  <img src={NewsImg} alt="news"/>
                </div>
                <div className="article-content">
                  <div className="title">
                    Aave, Curve, PoolTogether, and Sushi Among...
                  </div>
                  <div className="description">
                    Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                  </div>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article-image">
                  <img src={NewsImg} alt="news"/>
                </div>
                <div className="article-content">
                  <div className="title">
                    Aave, Curve, PoolTogether, and Sushi Among...
                  </div>
                  <div className="description">
                    Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                  </div>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article-image">
                  <img src={NewsImg} alt="news"/>
                </div>
                <div className="article-content">
                  <div className="title">
                    Aave, Curve, PoolTogether, and Sushi Among...
                  </div>
                  <div className="description">
                    Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                  </div>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article-image">
                  <img src={NewsImg} alt="news"/>
                </div>
                <div className="article-content">
                  <div className="title">
                    Aave, Curve, PoolTogether, and Sushi Among...
                  </div>
                  <div className="description">
                    Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                  </div>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article-image">
                  <img src={NewsImg} alt="news"/>
                </div>
                <div className="article-content">
                  <div className="title">
                    Aave, Curve, PoolTogether, and Sushi Among...
                  </div>
                  <div className="description">
                    Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                  </div>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article-image">
                  <img src={NewsImg} alt="news"/>
                </div>
                <div className="article-content">
                  <div className="title">
                    Aave, Curve, PoolTogether, and Sushi Among...
                  </div>
                  <div className="description">
                    Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                  </div>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article-image">
                  <img src={NewsImg} alt="news"/>
                </div>
                <div className="article-content">
                  <div className="title">
                    Aave, Curve, PoolTogether, and Sushi Among...
                  </div>
                  <div className="description">
                    Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                  </div>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article-image">
                  <img src={NewsImg} alt="news"/>
                </div>
                <div className="article-content">
                  <div className="title">
                    Aave, Curve, PoolTogether, and Sushi Among...
                  </div>
                  <div className="description">
                    Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                  </div>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <div className="article-image">
                  <img src={NewsImg} alt="news"/>
                </div>
                <div className="article-content">
                  <div className="title">
                    Aave, Curve, PoolTogether, and Sushi Among...
                  </div>
                  <div className="description">
                    Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                  </div>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="tags-wrapper">
              <div className="title">
                Tags
              </div>
              <div className="tags">
                <div className="tags-item is-active">
                  All
                </div>
                <div className="tags-item">
                  Cryptoeconomics
                </div>
                <div className="tags-item">
                  Business
                </div>
                <div className="tags-item">
                  Investments
                </div>
                <div className="tags-item">
                  Business strategies
                </div>
                <div className="tags-item">
                  Fintech
                </div>
                <div className="tags-item">
                  Marketing
                </div>
                <div className="tags-item">
                  Control
                </div>
                <div className="tags-item">
                  Dewelopment
                </div>
                <div className="tags-item">
                  IT
                </div>
                <div className="tags-item">
                  Control
                </div>
                <div className="tags-item">
                  Idea  and case
                </div>
                <div className="tags-item">
                  NFT
                </div>
                <div className="tags-item">
                  Start Up
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="board-footer">
          <div className="page-count">
            Rows per page:
            <input type="text" placeholder="10"/>
          </div>

          <div className="pagination">
            <PaginationRounded />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="board-panel">
          <div className="board-panel__select">
            <CustomSelect />
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

            <button className="btn btn--default" type="button">submit</button>
          </div>
        </div>

        <div className="board-body">
          <div className="content">
            <div className="article-wrapper">
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
              <article className="article">
                <Link to="/news-one">
                  <div className="article-image">
                    <img src={NewsImg} alt="news"/>
                  </div>
                </Link>
                <div className="article-content">
                  <Link to="/news-one">
                    <div className="title">
                      Aave, Curve, PoolTogether, and Sushi Among...
                    </div>
                  </Link>
                  <Link to="/news-one">
                    <div className="description">
                      Today, a consortium of leading Ethereum decentralized finance (DeFi) projects announced DeFi for the People, a collaboration
                    </div>
                  </Link>
                  <div className="article-data">
                    <div className="time">
                      26 jun 2020
                    </div>
                    <div className="tag">
                      Cryptoeconomics
                    </div>
                    <div className="share">
                      <SharePopover />
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="tags-wrapper">
              <div className="title">
                Tags
              </div>
              <div className="tags">
                <div className="tags-item is-active">
                  All
                </div>
                <div className="tags-item">
                  Cryptoeconomics
                </div>
                <div className="tags-item">
                  Business
                </div>
                <div className="tags-item">
                  Investments
                </div>
                <div className="tags-item">
                  Business strategies
                </div>
                <div className="tags-item">
                  Fintech
                </div>
                <div className="tags-item">
                  Marketing
                </div>
                <div className="tags-item">
                  Control
                </div>
                <div className="tags-item">
                  Dewelopment
                </div>
                <div className="tags-item">
                  IT
                </div>
                <div className="tags-item">
                  Control
                </div>
                <div className="tags-item">
                  Idea  and case
                </div>
                <div className="tags-item">
                  NFT
                </div>
                <div className="tags-item">
                  Start Up
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="board-footer">
          <div className="page-count">
            Rows per page:
            <input type="text" placeholder="10"/>
          </div>

          <div className="pagination">
            <PaginationRounded />
          </div>
        </div>
      </TabPanel>
    </>
  );
}