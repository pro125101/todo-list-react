import React from "react";
import MainPanel from "../containers/main-panel";
import "./style.scss";

export default function Layout() {
  return (
    <div className="main-layout">
      {/* <Header /> */}
      <MainPanel />
      {/* <Footer /> */}
    </div>
  );
}
