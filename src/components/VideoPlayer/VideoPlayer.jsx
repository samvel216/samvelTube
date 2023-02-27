import React from 'react';
import PropTypes from 'prop-types';

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

const VideoPlayer = ({ videoId }) => {
  return (
    <div>
      <Video videoId={videoId} />
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export { VideoPlayer };
