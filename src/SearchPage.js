import { TuneOutlined } from "@material-ui/icons";
import React from "react";
import ChannelRow from "./ChannelRow";
import "./SearchPage.css";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="SearchPage">
      <div className="SearchPage-filter">
        <TuneOutlined />
        <h3>FILTER</h3>
      </div>
      <hr />
      <div className="SearchPage-rows">
        <ChannelRow
          image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
          channelName="CleverProgrammer"
          verified
          subscriptions="696K"
          numVideos={382}
          description="You can find awesome programming lessons here! You can find awesome programming lessons here!You can find awesome programming lessons here!"
        />
        <hr />
      </div>
    </div>
  );
}

export default SearchPage;
