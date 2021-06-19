import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./VideoCard.css";

function VideoCard({
  title,
  channelName,
  channelPic,
  views,
  timestamp,
  videoPic,
}) {
  return (
    <div className="VideoCard">
      <img src={videoPic} alt={title} className="VideoCard-thumbnail" />
      <div className="VideoCard-info">
        <Avatar
          className="VideoCard-avatar"
          src={channelPic}
          alt={channelName}
        />
        <div className="VideoCard-text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
