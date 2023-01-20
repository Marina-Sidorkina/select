import React from "react";
import styles from "./index.module.scss";

const Failure = () => {
  return (
      <div className={styles.failure}>
        <div className={styles.failure_info}>
          <div className={styles.failure_title}>Ничего не найдено...</div>
        </div>
      </div>
  );
}

export default React.memo(Failure);
