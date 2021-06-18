import React from "react";
import SidebarRow from "./SidebarRow";
import {
  Home,
  Whatshot,
  Subscriptions,
  History,
  VideoLibrary,
  OndemandVideo,
  WatchLater,
  ThumbUpAltOutlined,
  ExpandMoreOutlined,
} from "@material-ui/icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarRow title="Home" Icon={Home} selected />
      <SidebarRow title="Trending" Icon={Whatshot} />
      <SidebarRow title="Subscription" Icon={Subscriptions} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrary} />
      <SidebarRow title="History" Icon={History} />
      <SidebarRow title="Your videos" Icon={OndemandVideo} />
      <SidebarRow title="Watch Later" Icon={WatchLater} />
      <SidebarRow title="Liked videos" Icon={ThumbUpAltOutlined} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlined} />
      <hr />
    </div>
  );
}

export default Sidebar;
