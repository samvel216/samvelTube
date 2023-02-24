import React, { useState, useEffect } from 'react';
import { displayPopularVideos } from '../api/mainApi';
import { SearchBar } from './SearchBar/SearchBar';
import { VideoList } from './PopularVideos/PopularVideos';
import {VideoPlayer} from './VideoPlayer/VideoPlayer';
import './PopularVideos/PopularVideos.module.css';

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

function App() {
  const [maxResults, setMaxResults] = useState(10);
  const [videoIds, setVideoIds] = useState([]);

  useEffect(() => {
    async function fetchVideoIds() {
      const ids = await displayPopularVideos(maxResults);
      setVideoIds(ids);
    }
    fetchVideoIds();
  }, [maxResults]);

  useEffect(() => {
    const removeScrollListener = handleScrollAddNumber(maxResults, setMaxResults);
    return () => {
      removeScrollListener();
    };
  }, [maxResults]);

  return (
    <div>
      <SearchBar />   
      <VideoList videoIds={videoIds} />
    </div>
  );
}

export { App };
