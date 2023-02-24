import React from 'react';
import PropTypes from 'prop-types';
import style from './PopularVideos.module.css';

const Video = ({ videoId }) => {
  const srcUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-wrapper">
      <iframe
        title={videoId}
        width="400"
        height="250"
        src={srcUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
};

const VideoLink = ({ videoId, thumbnailUrl }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={`Thumbnail for video ${videoId}`}
        className={style.thumbnail}
      />
    </a>
  );
};

VideoLink.propTypes = {
  videoId: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
};

const VideoList = ({ videoData }) => {
  if (!videoData || videoData.length === 0) {
    return <div>No videos found.</div>;
  }

  return (
    <ul className={style.list}>
      {videoData.map(({ id, thumbnailUrl }) => (
        <li key={id} className={style.item}>
          <VideoLink videoId={id} thumbnailUrl={thumbnailUrl} />
        </li>
      ))}
    </ul>
  );
};

VideoList.propTypes = {
  videoData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { VideoList };
