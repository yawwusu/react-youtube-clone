import { Avatar } from "@material-ui/core";
import { CheckCircleOutlineOutlined } from "@material-ui/icons";
import React from "react";
import "./ChannelRow.css";

function ChannelRow({
  image,
  channelName,
  verified,
  subscriptions,
  numVideos,
  description,
}) {
  return (
    <div className="ChannelRow">
      <Avatar className="ChannelRow-logo" src={image} alt={channelName} />
      <div className="ChannelRow-text">
        <h4>
          {channelName}
          {verified && <CheckCircleOutlineOutlined />}
        </h4>
        <p>
          {subscriptions} subscribers • {numVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
