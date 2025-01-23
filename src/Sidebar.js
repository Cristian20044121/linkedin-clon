import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

export const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://media.licdn.com/dms/image/v2/D4E16AQEy7Mhj11Uv2w/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1730121482049?e=1743033600&v=beta&t=GoBn8z0B4ML175DTqnXYVs4zOss-8nUWHpc-AL-LURQ" />
        <Avatar className="sidebar_avatar" />
        <h2>Cristian Caro</h2>
        <h4>crdcaro01@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">1,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,343</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software enginnering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};
