import React,{useContext} from 'react';
import UserContex from "@/context/UserContext"
import { Image } from '@/utils/Index';
import styles from './index.module.css'

export const Courses = () => {
    const {user} = useContext(UserContex);
    const courses = user?.courses || [];
    return (
        <div>
            <h1>Courses</h1>
            <div className='row'>
                {courses.map(course => (
                    <div key={course.id}>
                        <Image src={course.image} alt="notFount.jpg" width={300} height={200}/>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .course-title{
                    max-width: 20ch;
                    text-align: center;
                    margin: 0 auto;
                }
                .row{
                    display: flex;
                    flex-direction: row;
                    align-items: flex-end;
                    justify-content: space-around;
                    flex-wrap: wrap;
                }
                `}</style>
        </div>
    )
}
export default Courses;