import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/src/components/layaut';
import siteContex from '@/src/context/siteContext';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { initialState, reducer } from '@/src/reducers/useSiteReducer';
import { SiteService } from '@/src/services';
import { useRouter } from 'next/router';
import { PacmanLoader } from '@/src/components/loader/packman';
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const baseURL = publicRuntimeConfig.API_URL;

function App({ Component, pageProps }: AppProps) {

	const router = useRouter()

	const [state,dispatch]= useReducer(reducer,initialState);
	useMemo(()=>{
		return {state,dispatch}
	},[state,dispatch])

	let content = <Component {...pageProps} />
	return (
		<siteContex.Provider value={{state,dispatch}}>
			{content}
		</siteContex.Provider>
	)
}

export default App;
