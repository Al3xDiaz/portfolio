import React,{useContext} from 'react';
import UserContex from "@/context/siteContext"
import { Image,ModalImage } from '@/utils/Index';

export const Courses = () => {
    const {user} = useContext(UserContex);
    const courses = user?.courses || [];
    return (
        <div>
            <h1>Courses</h1>
            <div className='row'>
                {courses.map((course,index) => (
                    <div className='course' key={index}>
                        <ModalImage
                        small={course}
                        large={course}                      
                        />
                    </div>
                ))}
            </div>
            <style jsx>{`
                .row{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .course{
                    margin-bottom: 3rem;
                    margin-left: 1rem;
                    margin-right: 1rem;
                    height: 200px;
                    width: 300px;
                }
                `}</style>
        </div>
    )
}
export default Courses;