import React from 'react';
import { Image,ModalImage } from '@/utils/Index';
import useSite from '@/hooks/useSite';

export const Courses = () => {
    const {state:{ownerSite}} = useSite()
    const courses = ownerSite?.courses || [];
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