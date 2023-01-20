import React from "react";
import styles from "./index.module.scss";

const Control = (props: {children: React.ReactNode; onClick: Function; isOpen: boolean;}) => {
  const classValue = props.isOpen ? styles['control_field--opened'] : styles['control_field--closed'];

  return (
      <div className={styles.control}>
        <div className={`${styles.control_field} ${classValue}`}>
          <div className={styles.control_text}>
            {props.children}
          </div>
          <button type="button" className={styles.control_button} onClick={() => props.onClick()}>
            <svg width="10" height="6" viewBox="0 0 10 6">
              <path className={styles.control_icon}  d="M1.45442 4.81225C1.06285 5.11842 0.497225 5.0492 0.19105 4.65763C-0.115124 4.26607 -0.0459015 3.70044 0.345663 3.39427L4.4423 0.190996C4.76791 -0.0636034 5.22507 -0.0636926 5.55078 0.190779L9.65074 3.39405C10.0424 3.70007 10.1119 4.26567 9.80585 4.65735C9.49983 5.04904 8.93423 5.11848 8.54255 4.81246L4.99691 2.04228L1.45442 4.81225Z" />
            </svg>
          </button>
        </div>
      </div>
  )
}

export default React.memo(Control);
