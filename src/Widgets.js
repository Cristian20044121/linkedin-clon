import React from "react";
import "./Widgets.css";
import { Info } from "@mui/icons-material";

export const Widgets = () => {
  const newArticle = (heading, subtitle) => {};
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
    </div>
  );
};
