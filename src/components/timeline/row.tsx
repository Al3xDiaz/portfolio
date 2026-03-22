import { TimeLineProfile } from "@/src/models/user";
import React, { useEffect, useRef, useState } from "react";
import styles from './Row.module.css'
import { useSite } from "@/src/hooks/useSite";

interface props{
	item:TimeLineProfile,
	reverse?:boolean
}
export const Row= ({item,reverse}:props)=>{
	const { getLocalizedValue } = useSite();
	const localizedComment = getLocalizedValue(item.comment);
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
			{ threshold: 0.2 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`${styles.row} ${reverse ? styles.reverse : ''} ${visible ? styles.visible : ''}`}
		>
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
