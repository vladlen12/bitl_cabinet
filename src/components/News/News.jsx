import './News.scss'
import React from "react";
import TabPanelMenu from "./Tabs";

const NewsSection = () => (
  <section className="section section--news">
    <h1 className="h1">
      News
    </h1>

    <div className="board">
      <div className="tabs-wrapper">
        <TabPanelMenu />
      </div>
    </div>
  </section>
)

export default NewsSection