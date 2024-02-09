import { useCallback, useContext } from "react";
import context from "@/src/context/siteContext"

const useSiteCLI = () => {
	const {state,dispatch} = useContext(context)

	const hiddenHeader = useCallback(()=>{
		dispatch && dispatch({type:"SET_HIDDEM_HF"})
	},[dispatch])

	return {
		hiddenHeader,
		state,
	}}
export default useSiteCLI;
