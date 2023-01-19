import React from "react";
import styles from "./index.module.scss";

const Dropdown = (props: {children: React.ReactNode}) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_search}>
        <input type="search" className={styles.dropdown_field} placeholder="Поиск"/>
        <img className={styles.dropdown_icon} alt="icon"/>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Dropdown;
