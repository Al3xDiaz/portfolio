import { useCallback, useContext, useEffect, useRef } from "react";
import {authService as AuthService } from "@/src/services";
import context from "@/src/context/siteContext";

import { useRouter } from "next/router";
import getConfig from "next/config";
import { useSearchParams } from "next/navigation";

const { publicRuntimeConfig } = getConfig();
const baseURL = publicRuntimeConfig.API_URL;

export const useSite = () => {
	const {state,dispatch} = useContext(context);
  const router = useRouter();
  const params = useSearchParams();
  const logout= useCallback(async ()=>{
    const service = new AuthService(state.axiosInstance);
		try{
      await service.logout();
      dispatch && dispatch({type:"SET_VISITOR"});
		}catch(error){
      console.log(error)
		}
	},[dispatch,state.axiosInstance]);
	const getUserData= useCallback(async ()=>{
    const service = new AuthService(state.axiosInstance);
		return new Promise((resolve,reject)=>{
      service.getData().then(resp=>{
        dispatch && dispatch({type:"SET_VISITOR",payload:resp})
				resolve(resp)
			}).catch(error=>{
        resolve(null)
			})
		})
	},[state.axiosInstance])
  const validateCredential = useCallback(async(token:string)=>{
    const service = new AuthService(state.axiosInstance);
    try {
      await service.validatecredetial(token);
    } catch (error) {
      console.log(error)
    }
    router.replace({
      query: {
        username : router.query.username,
      }
    })
    getUserData();
  },[router,getUserData])

  useEffect(()=>{
    const token = params.get("token");
    if (!!token){
     validateCredential(token)
    }
  },[params,validateCredential]);
	return {
			state,
      logout,
	}}
