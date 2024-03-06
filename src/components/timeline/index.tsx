
import { Row } from './row';
import styles from './Index.module.css'
import { PacmanLoader } from '../loader/packman';
import { TimeLineProfile } from '@/src/models';

interface iprops{
  data:TimeLineProfile[];
}
const TimeLine = ({data}:iprops) => {
  if (!data.length){
    return <div></div>
  }
  return (
    <div className={styles.container}>
      {data.map((item,index)=>(
        <Row key={index} item={item} reverse={index%2==0}/>
      ))}
    </div>
  )
}
export default TimeLine;
