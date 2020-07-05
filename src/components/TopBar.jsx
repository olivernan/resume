import React from "react";

const TopBar = props => {
  return (
    <div className="ui segment">
      <div className="ui stackable grid">
        <div className="ui two wide column">
          <img
            style={{borderRadius: "50%"}}
            alt="profile_image"
            src="/image/IMG_0846.png"
            className="ui tiny image"
          />
        </div>
        <div className="ui four wide column" style={{ paddingLeft: "0" }}>
          <h1 className="ui large header" style={{ margin: " 10px 0 5px 0px" }}>
            {props.name}
          </h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;