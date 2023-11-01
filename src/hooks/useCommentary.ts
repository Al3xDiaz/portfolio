import { useCallback, useEffect, useRef, useState} from "react";
import { ICommentary } from "@/src/models"
import {CommentaryService} from "@/src/services/commentaryService"
import useSite from "./useSite";
import axios from "axios";

const useCommentary = () => {
    const {state:{axiosInstance}} = useSite()
    const [commentaries,setCommentaries] = useState<ICommentary[]>([])

    const service = useRef<CommentaryService>(new CommentaryService(axiosInstance)).current

    const getCommentaries= useCallback(async ()=>{
        try{
            const data = await service.list();
            setCommentaries(data)
        }catch(error){
            setCommentaries([])
        }
    },[setCommentaries])
    useEffect(()=>{
        getCommentaries()
    },[getCommentaries])
    
    const createCommentary = useCallback(async (content: string)=>{
        await service.create({comment:content,})
        await getCommentaries()
    },[commentaries,getCommentaries])
    
    return {
        commentaries,
        getCommentaries,
        createCommentary,
    }
}
export default useCommentary;