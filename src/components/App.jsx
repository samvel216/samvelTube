import React, { useState, useEffect } from 'react';
import { displayPopularVideos } from '../api/mainApi';
import { SearchBar } from './SearchBar/SearchBar';
import { VideoList } from './PopularVideos/PopularVideos';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';
import style from './PopularVideos/PopularVideos.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';

function handleScrollAddNumber(maxResults, setMaxResults) {
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight * 0.9) {
      setMaxResults(maxResults + 10);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

function Home() {
  const [maxResults, setMaxResults] = useState(10);
  const [videoInfo, setVideoInfo] = useState([]);

  useEffect(() => {
    async function fetchVideoIds() {
      const ids = await displayPopularVideos(maxResults);
      console.log(ids[0].snippet);
      setVideoInfo(ids);
    }
    fetchVideoIds();
  }, [maxResults]);

  useEffect(() => {
    const removeScrollListener = handleScrollAddNumber(maxResults, setMaxResults);
    return () => {
      removeScrollListener();
    };
  }, [maxResults]);

  const [videoUrl, setVideoUrl] = useState('');

  const handleVideoClick = (url) => {
    setVideoUrl(url);
  };

  return (
    <>
   
      {videoUrl ? (
        <Navigate to={`/video/${videoUrl}`} />
      ) : (
        <>
          {videoInfo && videoInfo.length > 0 ? (
            <>
              <VideoList videoIds={videoInfo} onVideoClick={handleVideoClick} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </>
  );
}

function App() {

  return (
    <div className={style.container}>
         <SearchBar onSubmit={(query) => console.log(query)} />
      <Routes>
        <Route path="/samvelTube" element={<Home />} />
        <Route path="video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export { App };
