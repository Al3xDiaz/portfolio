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
		const createCommentary = useCallback(async (content: string)=>{
				await service.create({comment:content,})
		},[commentaries])

		const deleteCommentary = useCallback(async (id:number)=>{
			 await service.delete(id);
		},[commentaries])

		useEffect(()=>{
				getCommentaries()
		},[getCommentaries])
		return {
				commentaries,
				getCommentaries,
				createCommentary,
				deleteCommentary,
		}
}
export default useCommentary;
