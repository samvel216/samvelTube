import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
console.log(videoUrl);
  return (
    <iframe
      width="560"
      height="315"
      src={videoUrl}
      title={`Video ${videoId}`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default Video;
