import React from "react";
import styles from "./index.module.scss";

const Select = (props: {children: React.ReactNode}) => {
  return (
    <div className={styles.select}>
      <h3 className={styles['select-title']}>Язык</h3>
      {props.children}
    </div>
  );
}

export default Select;
