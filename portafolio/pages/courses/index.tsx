import { useCourses } from '@/hooks/useCourses';
import Image from 'next/image';
import styles from './index.module.css'

export const Courses = () => {
    const { courses } = useCourses();
    return (
        <div>
            <h1>Courses</h1>
            <div className={styles.row}>
                {courses.map(course => (
                    <div key={course.id}>
                        <h2>{course.name}</h2>
                        <Image src={course.image} alt="notFount.jpg" width={300} height={200}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Courses;