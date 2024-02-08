import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/src/components/layaut';
import siteContex from '@/src/context/siteContext';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { initialState, reducer } from '@/src/reducers/useSiteReducer';
import { SiteService } from '../services';
import { useRouter } from 'next/router';
import getConfig from "next/config";
import { PacmanLoader } from '../components/loader/packman';

const { publicRuntimeConfig } = getConfig();
const baseURL = publicRuntimeConfig.BASE_URL;

function App({ Component, pageProps }: AppProps) {

	const router = useRouter()

	const [state,dispatch]= useReducer(reducer,initialState);
	useMemo(()=>{
		return {state,dispatch}
	},[state,dispatch])
	const siteService	= useRef<SiteService>(new SiteService(baseURL)).current

	const getSiteConfig= useCallback(async ()=>{
		if (!dispatch) return;
		dispatch({type:"SET_STATUS",payload:"loading"})
		if (!router.isReady) return;
		try{
			const ownerSite = await siteService.getSlugName(router.query.username as string);
			await new Promise(resolve => setTimeout(resolve, 3000));
			dispatch({type:"SET_SITE",payload:ownerSite});
		}catch(error){
			dispatch({type:"ERROR",payload:error});
		}
	},[router,dispatch])
	useEffect(()=>{
		getSiteConfig()
	},[router.query.username])

	let content = <Component {...pageProps} />
	if (state.status == "loading"){
		content = <PacmanLoader />
	}
	return (
		<siteContex.Provider value={{state,dispatch}}>
			<Layout>
				{content}
			</Layout>
		</siteContex.Provider>
	)
}

export default App;
