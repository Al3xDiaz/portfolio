
import { Row } from './row';
import styles from './Index.module.css'
import { PacmanLoader } from '../loader/packman';
import { TimeLineProfile } from '@/src/models';

interface iprops{
  data:TimeLineProfile[];
}
const TimeLine = ({data}:iprops) => {
  return (
    <div>
      <div className={styles["timeline-title"]}>
        <h2>Achievements</h2>
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
