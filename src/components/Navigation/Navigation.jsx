import React, { useState } from 'react';
import style from "./Navigation.module.css";
function Navigation(props) {
  return (
    <nav className={style.navigation}>
    <ul className={style.navigationList}>
        <li className={style.item}>
            <a href="">Главная</a>
        </li>
        <li className={style.item}>
            <a href="">Подписки</a>
        </li>
        <li className={style.item}>
            <a href="">История</a>
        </li>
        <li className={style.item}>
            <a href="">Смотреть позже</a>
        </li>
        <li className={style.item}>
            <a href="">Понравившиеся</a>
        </li>
    </ul>
</nav>
  );
}

export default Navigation;
