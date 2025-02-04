import React from "react";
import "./Widgets.css";
import { Info } from "@mui/icons-material";
import { FiberManualRecord } from "@mui/icons-material";

export const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newArticle("Caro React is back", "Top news - 9099 readers")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
      {newArticle("Programming IA is strong", "Top news - 887")}
    </div>
  );
};
