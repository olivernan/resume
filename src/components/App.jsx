import React from "react";

import TopBar from "./TopBar";
import Menu from "./Menu";
import Cards from "./Cards";

export default function App() {
  return (
    <div className="ui container" style={{ paddingTop: "1.5vh" }}>
      <TopBar
        name="Yiyang Nan"
        description="Current University of Michigan undergraduate student"
      />
      <Menu />
      <Cards />
    </div>
  );
}
