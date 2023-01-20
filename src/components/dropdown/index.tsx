import React from "react";
import styles from "./index.module.scss";

const Dropdown = (props: {children: React.ReactNode; onChange: Function; value: string;}) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_search}>
        <input type="search"
               className={styles.dropdown_field}
               placeholder="Поиск"
               value={props.value}
               onChange={(evt) => props.onChange(evt.target.value)}/>
        <img className={styles.dropdown_icon} alt="icon"/>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default React.memo(Dropdown);
