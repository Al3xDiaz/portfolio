// import { VerticalTimeline, VerticalTimelineElement }	from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import { Row } from './row';
import styles from './Index.module.css'
import { TimeLineProfile } from '@/src/models/user';

interface TimelineProps {
		data?:TimeLineProfile[];
}


const TimeLine = ({data}:TimelineProps) => {
		if (!data)
				return <div>no hay datos</div>
		return (
				<div>
						<div className={styles["timeline-title"]}>
								<h2>Experience</h2>
						</div>
						<div className={styles.container}>
						{data.map((item,index)=>(
								<Row key={index} item={item} reverse={index%2==0}/>
						))}
				</div>
				</div>
		)
}
export default TimeLine;
