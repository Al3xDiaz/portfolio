import { useState,useEffect,useRef,useCallback } from "react";
import {CourseService } from "@/services/courseService";
import { ICourse } from "@/models/course";

export const useCourses = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const service = useRef<CourseService>(new CourseService());

    const getCourses = useCallback(async () => {
        const courses = await service.current.list();
        setCourses(courses);
    }, []);

    useEffect(() => {
        getCourses();
    }, [getCourses]);
    return{
        courses,
    }
}