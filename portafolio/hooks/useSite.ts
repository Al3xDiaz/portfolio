import { useCallback, useEffect, useReducer, useRef } from "react"
import {reducer, initialState} from "@/reducers/useSiteReducer"
import { SiteService } from "@/services/siteService"
import {authService as AuthService } from "@/services/index"
import { IUser } from "../models";


const useSite = () => {
    const [state,dispatch]= useReducer(reducer,initialState);

    const siteService  = useRef<SiteService>(new SiteService()).current

    const getSiteConfig= useCallback(async ()=>{
        try{
            const ownerSite = await siteService.detail(1);
            dispatch({type:"SET_SITE",payload:ownerSite});
        }catch(error){
            dispatch({type:"ERROR",payload:error});
        }
    },[])
    const authService  = useRef<AuthService>(new AuthService(state.axiosInstance)).current

    const login= useCallback(async (username: string,password: string)=>{
        try{
            const resp = await authService.login(username,password);
            dispatch({type:"SET_VISITOR",payload:resp.user})
            localStorage.setItem("access_token",resp.token)
        }catch(error){
            dispatch({type:"ERROR",payload:error});
        }
    },[])    
    const signUp= useCallback(async (data: IUser)=>{
        try{
            const resp = await authService.signUp(data);
            dispatch({type:"SET_VISITOR",payload:resp.user})
            localStorage.setItem("access_token",resp.token)
        }catch(error){
            dispatch({type:"ERROR",payload:error});
        }
    },[])
    const getUserData= useCallback(async ()=>{
        try{
            const resp = await authService.getData();
            dispatch({type:"SET_VISITOR",payload:resp})
        }catch(error){
            dispatch({type:"ERROR",payload:error});
        }
    },[])
    useEffect(()=>{
        getSiteConfig()
        state.axiosInstance.interceptors.request.use(function (config) {
            const token = localStorage.getItem("access_token")
            config.headers && (config.headers.Authorization =  token ? `Bearer ${token}` : '')
            return config;
        });
        getUserData()
    },[getSiteConfig,getUserData])
    return {
        state,
        login,
        signUp,
    }}
export default useSite;