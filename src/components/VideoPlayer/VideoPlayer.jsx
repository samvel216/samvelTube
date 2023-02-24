import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ videoId }) => {
  const srcUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-player">
      <iframe
        title={videoId}
        width="560"
        height="315"
        src={srcUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export  {VideoPlayer};
