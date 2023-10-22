import { TimeLineProfile } from "@/src/models/user";
import React from "react";
import styles from './Row.module.css'

interface props{
    item:TimeLineProfile,
    reverse?:boolean
}
export const Row= ({item,reverse}:props)=>(
    <div className={reverse?styles.reverse:styles.row} data-year={item.year} >
        <div className={styles.description}>
            {item.comment}
        </div>
        <div className={styles.title}>{item.title}</div>
    </div>
)
export default Row;