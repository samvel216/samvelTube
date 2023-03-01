import React from 'react';
import PropTypes from 'prop-types';
import style from './PopularVideos.module.css';
import { Link } from 'react-router-dom';
import formatTimeAgo from '../../function/formatTimeAgo';
import fetchVideoById from '../../api/fetchVideoById';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VideoLink = ({ videoId }) => {
  const time =  formatTimeAgo(videoId.snippet.publishedAt);
  const videoUrl = `/video/${videoId.id}`;
  return (
    <Link to={videoUrl}>
      <img
        src={`https://img.youtube.com/vi/${videoId.id}/hqdefault.jpg`}  
        alt={`Thumbnail for video ${videoId.id}`}
      />
      <h3>{`${videoId.snippet.title}`}</h3>
      <p>{time}</p>
    </Link>
  );
};

VideoLink.propTypes = {
  videoId: PropTypes.shape({
    id: PropTypes.string.isRequired,
    snippet: PropTypes.shape({
      title: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const VideoList = ({ videoIds }) => {
  if (!videoIds || videoIds.length === 0) {
    return <div>No videos found.</div>;
  }

  return (
    <ul className={style.list}>
      {videoIds.map((id, index) => (
        <li key={index} className={style.item}>
          <VideoLink videoId={id} />
        </li>
      ))}
    </ul>
  );
};

VideoList.propTypes = {
  videoIds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      snippet: PropTypes.shape({
        publishedAt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export { VideoList };
