import { TimeLineProfile } from "@/src/models/user";
import React from "react";
import styles from './Row.module.css'
import { useSite } from "@/src/hooks/useSite";

interface props{
	item:TimeLineProfile,
	reverse?:boolean
}
export const Row= ({item,reverse}:props)=>{
	const { getLocalizedValue } = useSite();
	const localizedComment = getLocalizedValue(item.comment);
	
	return (
		<div className={`${styles.row} ${reverse?styles.reverse:''}`} >
			<div className={styles.description}>
				{localizedComment}
				<span />
			</div>
			<div className={styles.title}>{item.title}</div>
			<span className={styles.year}>{item.year}</span>
		</div>
	)
}
export default Row;
