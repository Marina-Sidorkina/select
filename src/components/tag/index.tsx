import React from "react";
import styles from "./index.module.scss";

const Tag = (props: {value: string; onClick: Function;}) => {
  return (
      <div className={styles.tag}>
        <span>Тест</span>
        <button type="button" className={styles.tag_button} onClick={() => {props.onClick(props.value)}}>
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path className={styles.tag_icon} d="M7.55231 0.447703C7.81591 0.711307 7.81591 1.13869 7.55231 1.4023L4.95475 4L7.55231 6.59771C7.79394 6.83935 7.81408 7.21861 7.61272 7.48318L7.55231 7.55231C7.2887 7.81591 6.86132 7.81591 6.59771 7.55231L4 4.95475L1.4023 7.55231C1.13869 7.81591 0.711307 7.81591 0.447703 7.55231C0.184099 7.2887 0.184099 6.86132 0.447703 6.59771L3.04525 4L0.447703 1.4023C0.206066 1.16066 0.18593 0.781401 0.387294 0.516826L0.447703 0.447703C0.711307 0.184099 1.13869 0.184099 1.4023 0.447703L4 3.04525L6.59771 0.447703C6.86132 0.184099 7.2887 0.184099 7.55231 0.447703Z" />
          </svg>
        </button>
      </div>
  );
}

export default Tag;
