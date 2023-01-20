import React from "react";
import styles from "./index.module.scss";

const Placeholder = (props: {value: string;}) => {
  return <div className={styles.placeholder}>{props.value}</div>;
}

export default React.memo(Placeholder);
