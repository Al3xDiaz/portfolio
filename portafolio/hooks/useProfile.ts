import { useCallback, useEffect, useReducer, useRef } from "react"
import {reducer, initialState} from "@/reducers/useUserReducer"
import { UserService } from "@/services/userService"

const useProfile = () => {
    const [state,dispatch]= useReducer(reducer,initialState)

    const service  = useRef<UserService>(new UserService()).current

    const getUSer= useCallback(async ()=>{
        try{
            const user = await service.detail(1);
            dispatch({type:"SET_USER",payload:user});
        }catch(error){
            dispatch({type:"ERROR"});
        }
    },[])
    useEffect(()=>{
        getUSer()
    },[getUSer])
    
    return {
        state,
    }
}
export default useProfile