import { useCallback, useEffect, useRef, useState} from "react";
import { ICommentary } from "@/src/models"
import {CommentaryService} from "@/src/services/commentaryService"
import {useSite} from "@/src/hooks/useSite";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

interface ICommentaryResponseError {
  msg:string;
}

const useCommentary = () => {
		const {state:{axiosInstance}} = useSite()
		const [commentaries,setCommentaries] = useState<ICommentary[]>([])
    const router = useRouter();

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
      try {
				await service.create({comment:content,})
      } catch (error) {
        if (axios.isAxiosError(error)){
          console.log(error.response?.status)
          router.replace(`/${error.response?.status}`,{query:{returnUrl:location.href}})
        }
      }
		},[commentaries,router])

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
