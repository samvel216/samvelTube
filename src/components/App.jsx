import React, { useState, useEffect } from 'react';
import { displayPopularVideos } from '../api/mainApi';
import { SearchBar } from './SearchBar/SearchBar';
import { VideoList } from './PopularVideos/PopularVideos';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';
import style from './PopularVideos/PopularVideos.module.css';

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
      console.log(ids);
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
    <div className={style.container}>
      <SearchBar onSubmit={(query) => console.log(query)} />
      {videoIds && videoIds.length > 0 ? (
        <>
          {/* <VideoPlayer videoId={videoIds} /> */}
          <VideoList videoIds={videoIds} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export { App };
