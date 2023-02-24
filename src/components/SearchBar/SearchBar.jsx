import React, { useState } from 'react';
import style from "./SearchBar.module.css";
import Navigation from '../Navigation/Navigation';

function SearchBar(props) {
  const [query, setQuery] = useState('');
  const [showNavigation, setShowNavigation] = useState(false);

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(query);
  }

  function handleMenuClick() {
    setShowNavigation(!showNavigation);
  }

  return (
    <div className={style.container}>   
     {showNavigation && <Navigation />}
      <div>
        <button className={style.menuBtn} onClick={handleMenuClick}>мЕНЮ</button>
        <a href="">СамвелТуб</a>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for videos"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <button className={style.createBtn}>Создать</button>
        <button>мой аккаунт</button>
      </div>

     
    </div>
  );
}

export  {SearchBar};
