import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { HeaderOption } from "./HeaderOption";
import { Home } from "@mui/icons-material";
import { SupervisorAccount } from "@mui/icons-material";
import { BusinessCenter } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase.js";
import { logout, selectUser } from "./features/userSlice";

export const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://freelogopng.com/images/all_img/1656994981linkedin-icon-png.png"
          alt=""
        />
        <div className="header_search">
          {/*icon search*/}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          title="Me"
          avatar={true}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};
