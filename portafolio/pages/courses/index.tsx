import React,{useContext} from 'react';
import UserContex from "@/context/UserContext"
import { Image } from '@/utils/Index';
import ModalImage from "react-modal-image";

export const Courses = () => {
    const {user} = useContext(UserContex);
    const courses = user?.courses || [];
    return (
        <div>
            <h1>Courses</h1>
            <div className='row'>
                {courses.map((course,index) => (
                    <div className='course' key={index}>
                        {/* <Image src={course} alt="notFound.jpg" width={300} height={200}/> */}
                        <ModalImage
                        small={course}
                        large={course}
                        hideDownload={true}
                        showRotate={true}                        
                        />;
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
                    margin: 1rem;
                    height: 200px;
                    width: 300px;
                }
                `}</style>
        </div>
    )
}
export default Courses;