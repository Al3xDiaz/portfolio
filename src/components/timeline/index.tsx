
import { Row } from './row';
import styles from './Index.module.css'
import useTimeLine from '@/src/hooks/useTimeLine';
import { PacmanLoader } from '../loader/packman';

const TimeLine = () => {
  const {data,state} = useTimeLine();
  if (state=="loading")
    return (<div>
        <div className={styles["timeline-title"]}>
          <h2>Achievements</h2>
        </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",height:"8rem"}}>
          <PacmanLoader />
        </div>
    </div>)
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
