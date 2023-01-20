import React from "react";
import styles from "./index.module.scss";

const Select = (props: {children: React.ReactNode; title: string;}) => {
  return (
    <div className={styles.select}>
      <h3 className={styles['select-title']}>{props.title}</h3>
      {props.children}
    </div>
  );
}

export default React.memo(Select);
