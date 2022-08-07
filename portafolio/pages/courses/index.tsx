import { useCourses } from '@/hooks/useCourses';
import Image from 'next/image';

export const Courses = () => {
    const { courses } = useCourses();
    return (
        <div>
            <h1>Courses</h1>
            <div className='container'>
                {courses.map(course => (
                    <div key={course.id}>
                        <h2>{course.name}</h2>
                        <Image src={course.image}  width={300} height={200}/>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .container{
                    display: "flex";
                    width: "100%";
                    flex-direction: "row";
                    align-items: "center";
                    justify-content: "center";
                    flex-wrap: "wrap";
                }
                .container div{
                    padding: "1rem";
                }
                `}</style>
        </div>
    )
}
export default Courses;