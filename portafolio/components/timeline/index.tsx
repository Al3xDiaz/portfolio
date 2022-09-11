// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import { Row } from './row';
import styles from './Index.module.css'
import { TimeLineProfile } from '@/models/user';

interface TimelineProps {
    data:TimeLineProfile[];
}


export const TimeLine = ({data}:TimelineProps) => {
    return (
        <div className={styles.container}>
            {data.map((item,index)=>(
                <Row item={item} reverse={index%2==0}/>
            ))}
            <style jsx>{`
                .icon{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;     
                }
            `}</style>
        </div>
    )
}