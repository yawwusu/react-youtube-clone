import React from "react";
import "./SidebarRow.css";

function SidebarRow({ title, Icon, selected }) {
  return (
    <div className={`SidebarRow ${selected && "SidebarRow-selected"}`}>
      <Icon className="SidebarRow-icon" />
      <h5 className="SidebarRow-title">{title}</h5>
    </div>
  );
}

export default SidebarRow;
