import React from 'react';
import PropTypes from 'prop-types';
import style from './PopularVideos.module.css';

const VideoLink = ({ videoId, thumbnailUrl }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  console.log(videoId)
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
  videoIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { VideoList };
