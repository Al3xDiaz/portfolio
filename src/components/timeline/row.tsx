import { TimeLineProfile } from "@/src/models/user";
import React from "react";
import styles from './Row.module.css'

interface props{
		item:TimeLineProfile,
		reverse?:boolean
}
export const Row= ({item,reverse}:props)=>(
		<div className={`${styles.row} ${reverse?styles.reverse:''}`} >
				<div className={styles.description}>
						{item.comment}
            <span />
				</div>
				<div className={styles.title}>{item.title}</div>
        <span className={styles.year}>{item.year}</span>
		</div>
)
export default Row;
