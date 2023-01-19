import React from "react";
import styles from "./index.module.scss";
import {IOptions} from "../../data";

const Item = (props: {id: string; value: string; src: string; onChange: Function, tags: IOptions}) => {
  return (
    <div className={styles.item} key={props.id}>
      <div className={styles.item_info}>
        <img className={styles.item_icon} src={props.src} width="21" height="15" alt="flag"/>
        <div className={styles.item_title}>{props.value}</div>
      </div>
      <div className={styles.item_control}>
        <input className={styles.item_check}
               type="checkbox"
               value={props.value}
               id={props.id}
               onChange={(evt) => props.onChange(props.id, evt.target.checked)}
               checked={props.tags.findIndex(item => item.id === props.id) !== -1}/>
        <label htmlFor={props.id}></label>
      </div>
    </div>
  );
}

export default Item;
