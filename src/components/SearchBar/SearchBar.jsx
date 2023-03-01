import React, { useState } from 'react';
import style from "./SearchBar.module.css";
import { ReactComponent as Icons } from '../../images/iconS.svg';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as ListIcon } from '../../images/spryte.svg';
import { ReactComponent as IconSearch } from '../../images/iconSearch.svg';

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
      <div className={style.menuContainer}>
      
        <button className={style.menuBtn} onClick={handleMenuClick}>
    
        <ListIcon className={style.icon}/>
        </button>
        <a href="" className={style.SamviTubeLink}>  <Icons className={style.iconS}/>amvi<span className={style.SamviTubeSpan}>Tube</span></a> 
      </div>
      <iconsearch/>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <input
        className={style.searchInput}
          type="text"
          placeholder="Search for videos"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className={style.searchBtn}><IconSearch className={style.iconSearch}/></button>
      </form>

      <div>
        <button className={style.logBtn}>Log in</button>
      </div>

     
    </div>
  );
}

export  {SearchBar};
