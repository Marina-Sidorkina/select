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
        <svg className={styles.dropdown_icon} width="14" height="15" viewBox="0 0 14 15">
          <path d="M5.50006 0C8.53765 0 11.0001 2.46256 11.0001 5.50029C11.0001 6.74868 10.5842 7.89993 9.88346 8.82304L13.7791 12.7233C14.0718 13.0164 14.0715 13.4913 13.7785 13.784C13.4854 14.0767 13.0105 14.0764 12.7178 13.7834L8.82266 9.88388C7.89959 10.5847 6.74839 11.0006 5.50006 11.0006C2.46246 11.0006 0 8.53802 0 5.50029C0 2.46256 2.46246 0 5.50006 0ZM5.50006 1.5C3.2909 1.5 1.5 3.29098 1.5 5.50029C1.5 7.70961 3.2909 9.50058 5.50006 9.50058C7.70921 9.50058 9.50011 7.70961 9.50011 5.50029C9.50011 3.29098 7.70921 1.5 5.50006 1.5Z" fill="#C1C1C1"/>
        </svg>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default React.memo(Dropdown);
