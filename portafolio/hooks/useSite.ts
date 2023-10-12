import { useCallback, useContext, useEffect, useReducer, useRef } from "react"
import {reducer} from "@/reducers/useSiteReducer"
import { SiteService } from "@/services/siteService"
import {authService as AuthService } from "@/services/index"
import { IUser } from "../models";
import context from "@/context/siteContext"


const useSite = () => {
    const {state,dispatch} = useContext(context)

    const siteService  = useRef<SiteService>(new SiteService()).current

    const getSiteConfig= useCallback(async ()=>{
        try{
            const ownerSite = await siteService.detail(1);
            dispatch && dispatch({type:"SET_SITE",payload:ownerSite});
        }catch(error){
            dispatch && dispatch({type:"ERROR",payload:error});
        }
    },[])
    const authService  = useRef<AuthService>(new AuthService(state.axiosInstance)).current

    const login= useCallback(async (username: string,password: string)=>{
        try{
            const resp = await authService.login(username,password);
            dispatch && dispatch({type:"SET_VISITOR",payload:resp.user})
            localStorage.setItem("access_token",resp.token)
        }catch(error){
            dispatch && dispatch({type:"ERROR",payload:error});
        }
    },[])    
    const signUp= useCallback(async (data: IUser)=>{
        try{
            const resp = await authService.signUp(data);
            dispatch && dispatch({type:"SET_VISITOR",payload:resp.user})
            localStorage.setItem("access_token",resp.token)
        }catch(error){
            dispatch && dispatch({type:"ERROR",payload:error});
        }
    },[])
    const getUserData= useCallback(async ()=>{
        try{
            const resp = await authService.getData();
            dispatch && dispatch({type:"SET_VISITOR",payload:resp})
        }catch(error){
            dispatch && dispatch({type:"ERROR",payload:error});
        }
    },[])
    useEffect(()=>{
        getSiteConfig()
        state.axiosInstance && state.axiosInstance.interceptors.request.use(function (config) {
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