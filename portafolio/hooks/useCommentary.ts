import { useCallback, useEffect, useRef, useState} from "react";
import { Commentary } from "@/models/index"
import {CommentaryService} from "@/services/commentaryService"

const useCommentary = () => {
    const [commentaries,setCommentaries] = useState<Commentary.IComentary[]>([])

    const service  = useRef<CommentaryService>(new CommentaryService()).current

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
    
    return {
        commentaries,
        getCommentaries
    }
}
export default useCommentary;