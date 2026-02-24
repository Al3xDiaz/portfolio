import '../styles/globals.css';
import { AppProps } from 'next/app';
import siteContex from '@/src/context/siteContext';
import { useMemo, useReducer } from 'react';
import { initialState, reducer } from '@/src/reducers/useSiteReducer';

function CustomApp({ Component, pageProps }: AppProps) {
	const [state,dispatch]= useReducer(reducer,initialState);
	useMemo(()=>{
		return {state,dispatch}
	},[state,dispatch]);

	let content = <Component {...pageProps} />
	return (
		<siteContex.Provider value={{state,dispatch}}>
      <div className="background-container">
        <div className="background"></div>
        <div className="radial"></div>
      </div>
      <div className="page">
			  {content}
      </div>
		</siteContex.Provider>
	)
}

export default CustomApp;
