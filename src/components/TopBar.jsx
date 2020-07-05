import React from "react";

const TopBar = props => {
  const src = "IMG_0846.png"
  const imgSrc = src.startsWith("http://") || src.startsWith('https://') 
    ? src
    : require("../image/" + src) 
  return (
    <div className="ui segment">
      <div className="ui stackable grid">
        <div className="ui two wide column">
          <img
            style={{borderRadius: "50%"}}
            alt="profile_image"
            src= {imgSrc}
            className="ui tiny image"
          />
        </div>
        <div className="ui four wide column" style={{ paddingLeft: "0" }}>
          <h1 className="ui large header" style={{ margin: " 10px 0 5px 0px" }}>
            {props.name}
          </h1>
          <p>{props.description}</p>
        </div>

        <div>
          <div>
            <img src="https://img.icons8.com/fluent/24/000000/github.png" style={{margin: " 25px 20px 0px 200px"}}/>
            <span>olivernan</span>
          </div>

          <div>
            <img src="https://img.icons8.com/material-sharp/24/000000/email.png" style={{margin: " 5px 20px 0px 200px"}}/>
            <span>nanyiyang@gmail.com</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;