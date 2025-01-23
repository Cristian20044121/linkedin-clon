import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

export const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {/**Verifica si icon existe y lo renderezia en componente icon */}
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};
