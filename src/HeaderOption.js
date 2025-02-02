import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {/**Verifica si icon existe y lo renderezia en componente icon */}
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon">
        {user?.email[0]}
        </Avatar>}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
};
