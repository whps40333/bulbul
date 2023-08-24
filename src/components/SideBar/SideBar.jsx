import React, { useState } from "react";
import styles from "./SideBar.module.scss";

const SideBar = ({ checked, onToggle }) => {
  return (
    <div className={styles.SideBar}>
      <header>白頭翁不吃小米</header>
      <input
        type="checkbox"
        className={styles.NavbarToggle}
        id="navbar-toggle"
        checked={checked}
        onChange={onToggle}
      />
      <nav className={styles.Nav}>
        <ul className={styles.NavList}>
          <li>
            <button className={styles.NavItem}>白頭翁的特性</button>
          </li>
          <li>
            <button className={styles.NavItem}>白頭翁的故事</button>
          </li>
          <li>
            <button className={styles.NavItem}>白頭翁的美照</button>
          </li>
          <li>
            <button className={styles.NavItem}>白頭翁的危機</button>
          </li>
        </ul>
      </nav>
      <label className={styles.NavbarLabel} htmlFor="navbar-toggle">
        <div className={styles.LineTop}></div>
        <div className={styles.LineMiddle}></div>
        <div className={styles.LineBottom}></div>
      </label>
    </div>
  );
};

export default SideBar;
