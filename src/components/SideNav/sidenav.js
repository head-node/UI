import React from "react";

const sidenav = ({ navlist }) => {
  return <div className="navlist">{navlist.map((item, index) => {
      return <p index={index}>{item}</p>
  })}</div>;
};

export default sidenav;
