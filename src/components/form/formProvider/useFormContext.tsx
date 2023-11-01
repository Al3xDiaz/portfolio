import { useCallback, useContext, useEffect, useRef } from "react"
import context from "./context"
import { IState } from "./reducer";


const useSite = () => {
    const {state,dispatch} = useContext(context);

    const setProp= useCallback((payload:IState)=>{
        dispatch && dispatch({
            type:"SET_PROP",
            payload,
        })
    },[state,dispatch])

    return {
        setProp,
        state,
    }}
export default useSite;