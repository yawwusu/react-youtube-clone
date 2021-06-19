import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subscriptions,
  title,
  channelName,
  timestamp,
  image,
  description,
}) {
  return (
    <div className="VideoRow">
      <img className="VideoRow-logo" src={image} alt={channelName} />
      <div className="VideoRow-text">
        <h4>{title}</h4>
        <p className="VideoRow-headline">
          {channelName} •{" "}
          <span className="VideoRow-subs">
            <span className="VideoRow-subsNo">{subscriptions}</span> subscribers
          </span>
          • {views} • {timestamp}
        </p>
        <p className="VideoRow-description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
