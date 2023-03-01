import React from 'react';
import PropTypes from 'prop-types';
import Video from '../Video/Video';
import { useParams } from "react-router-dom";
import {fetchVideoById} from "../../api/fetchVideoById"
import  { useState, useEffect } from 'react';
import formatTimeAgo from "../../function/formatTimeAgo"
import {addLinksToText} from "../../function/addLinksInText"

const VideoPlayer = ({ videoUrl }) => {
  const [videoInfo, setVideoInfo] = useState([]);
  const { videoId } = useParams();
  useEffect(() => {
  async function fetchVideo() {
  const item = await fetchVideoById(videoId);
  setVideoInfo(item);
  }
  fetchVideo();
}, []);
if (!videoInfo.items || videoInfo.items.length === 0) {
  return <div>Loading...</div>;
}
const video = videoInfo.items[0];
const videoTitle = video.snippet.localized.title;
const time = formatTimeAgo(video.snippet.publishedAt)
const view = video.statistics.viewCount;
function formatTags(tags) {
  if (tags ==! undefined) {
    return tags.slice(0, 3).map(tag => `#${tag}`).join(', ');
  }
  return;
}
const description = video.snippet.localized.description;
const firstTags = formatTags(video.snippet.tags)

  return (
    <div>
      <Video videoId={videoId} />
      <h3>{videoTitle}</h3>
      <div>
        <p>{view} просмотров</p>
        <p>{time}</p>
        <p>{firstTags} </p>
      </div>
      <p>{addLinksToText(description)}</p>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export  {VideoPlayer};
