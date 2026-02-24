import { useCallback, useContext, useEffect, useRef } from "react";
import {authService as AuthService } from "@/src/services";
import context from "@/src/context/siteContext";
import translations from "@/src/data/translations.json";
import { Language } from "@/src/models/user";
import { useRouter } from "next/router";
import getConfig from "next/config";
import { useSearchParams } from "next/navigation";

const { publicRuntimeConfig } = getConfig();
const baseURL = publicRuntimeConfig.API_URL;

export const useSite = () => {
	const {state,dispatch} = useContext(context);
  const router = useRouter();
  const params = useSearchParams();
  
  const setLanguage = useCallback((lang: Language) => {
    dispatch && dispatch({type: "SET_LANGUAGE", payload: lang});
  }, [dispatch]);

  const t = useCallback((key: string) => {
    const keys = key.split('.');
    let value: any = translations[state.lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }, [state.lang]);

  const getLocalizedValue = useCallback((obj: any) => {
    if (typeof obj === 'object' && obj !== null && ('es-LA' in obj || 'en-US' in obj)) {
      return obj[state.lang] || obj['es-LA'] || obj['en-US'] || '';
    }
    return obj;
  }, [state.lang]);

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
	},[state.axiosInstance,dispatch])
  const validateCredential = useCallback(async(token:string | null)=>{
    const service = new AuthService(state.axiosInstance);
    if (!!token){
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
    }
    getUserData();
  },[router,getUserData,state.axiosInstance])

  useEffect(()=>{
    const token = params.get("token");
    validateCredential(token)
  },[params,validateCredential]);
	return {
		state,
      logout,
      setLanguage,
      t,
      getLocalizedValue,
	}}
