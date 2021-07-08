import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import { FiberManualRecord } from "@material-ui/icons";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleleft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Learning React and Redux", "Top Sources - 9099 readers")}
    </div>
  );
};

export default Widget;
