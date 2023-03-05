import UserContext from "@/context/UserContext";
import { IComentary } from "@/models/comentary";
import { useCallback,useContext,useEffect, useRef, useState } from "react";
import {ComentaryService} from "@/services/comentariesService";

export const useComentary=()=>{
    const {user} = useContext(UserContext);
    const [comentaries,setComentaries] = useState<IComentary[]>();
    const service = useRef<ComentaryService>(new ComentaryService()).current;
    const createComentary=useCallback((comentary:IComentary)=>{

    },[])
    useEffect(()=>{
        console.log(user?.username);
        
        service.listFilter(user?.username)
        .then(setComentaries)
        .catch(console.error);
    },[user])
    return {
        comentaries,
        // setComentaries,
        createComentary
    }
}
export default useComentary