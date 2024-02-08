import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/src/components/layaut';
import siteContex from '@/src/context/siteContext';
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { initialState, reducer } from '@/src/reducers/useSiteReducer';
import { SiteService } from '../services';
import { useRouter } from 'next/router';
import getConfig from "next/config";

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
		content = (
			<div className="loader-wrapper">
				<div className="packman"></div>
				<div className="dots">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
				<style jsx>{`
				.loader-wrapper {
					position: relative;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					margin: auto;
				}

				.loader-wrapper .packman::before {
					content: '';
					position: absolute;
					width: 50px;
					height: 25px;
					background-color: #EFF107;
					border-radius: 100px 100px 0 0;
					transform: translate(-50%, -50%);
					animation: pac-top 0.5s linear infinite;
					transform-origin: center bottom;
				}

				.loader-wrapper .packman::after {
					content: '';
					position: absolute;
					width: 50px;
					height: 25px;
					background-color: #EFF107;
					border-radius: 0 0 100px 100px;
					transform: translate(-50%, 50%);
					animation: pac-bot 0.5s linear infinite;
					transform-origin: center top;
				}

				@keyframes pac-top {
					0% {
						transform: translate(-50%, -50%) rotate(0)
					}

					50% {
						transform: translate(-50%, -50%) rotate(-30deg)
					}

					100% {
						transform: translate(-50%, -50%) rotate(0)
					}
				}

				@keyframes pac-bot {
					0% {
						transform: translate(-50%, 50%) rotate(0)
					}

					50% {
						transform: translate(-50%, 50%) rotate(30deg)
					}

					100% {
						transform: translate(-50%, 50%) rotate(0)
					}
				}

				.dots .dot {
					position: absolute;
					z-index: -1;
					top: 8px;
					width: 10px;
					height: 10px;
					border-radius: 50%;
					{/* background: #fff; */}
					background: var(--primary);
				}

				.dots .dot:nth-child(1) {
					left: 90px;
					animation: dot-stage1 0.5s infinite;
				}

				.dots .dot:nth-child(2) {
					left: 60px;
					animation: dot-stage1 0.5s infinite;
				}

				.dots .dot:nth-child(3) {
					left: 30px;
					animation: dot-stage1 0.5s infinite;
				}

				.dots .dot:nth-child(4) {
					left: 10px;
					animation: dot-stage2 0.5s infinite;
				}

				@keyframes dot-stage1 {
					0% {
						transform: translate(0, 0);
					}

					100% {
						transform: translate(-24px, 0);
					}
				}

				@keyframes dot-stage2 {
					0% {
						transform: scale(1);
					}

					5%, 100% {
						transform: scale(0);
					}
				}`}</style>
		</div>)
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
