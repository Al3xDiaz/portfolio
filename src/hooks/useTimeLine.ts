import { useCallback, useEffect, useRef, useState } from "react"
import AchievementsService from "../services/timelineService"
import { useSite } from "./useSite"
import { TimeLineProfile } from "../models"
interface IState{
  data: TimeLineProfile[];
  state: "loading" | "load" | "error"
}

const useCommentary = () => {
  const {state:{axiosInstance,ownerSite}} = useSite()
  const service = useRef<AchievementsService>(new AchievementsService(axiosInstance)).current

  const [state,setState] =useState<IState>({
    data:[],
    state:"load"
  })

  const getData = useCallback(async()=>{
    setState({...state,state:"loading"})
    const data =await service.list(ownerSite?.username)
    setState({state:"load",data})
  },[])
  useEffect(()=>{
    getData()
  },[])
  return state;
}
export default useCommentary;
