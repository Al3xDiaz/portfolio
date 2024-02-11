import { useCallback, useContext, useEffect, useRef } from "react";
import {authService as AuthService } from "@/src/services";
import { IUser } from "@/src/models";
import context from "@/src/context/siteContext";


export const useSite = () => {
	const {state,dispatch} = useContext(context)


	const authService	= useRef<AuthService>(new AuthService(state.axiosInstance)).current

	const login= useCallback(async ({username,password}:{username: string,password: string})=>{
		if (!dispatch) return
		try{
			const resp = await authService.login(username,password);
			dispatch({type:"SET_VISITOR",payload:resp.user})
			localStorage.setItem("access_token",resp.token)
		}catch(error){
			dispatch({type:"ERROR",payload:error});
		}
	},[])
	const signUp= useCallback(async (data: IUser)=>{
		if (!dispatch) return
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
			dispatch && dispatch({type:"SET_VISITOR",payload:resp})
		}catch(error){
			console.log("user unauthorized")
		}
	},[])
	useEffect(()=>{
		const token = localStorage.getItem("access_token")
		state.axiosInstance && state.axiosInstance.interceptors.request.use(function (config) {
			if (config.headers){
				config.headers.Authorization =	token ? `Bearer ${token}` : ''
				config.headers.Accept = 'application/json'
				config.headers['Content-Type'] = 'application/json'
			}
			return config;
		});
		token && getUserData()
	},[getUserData])
	return {
			state,
			login,
			signUp,
	}}
