import '../styles/globals.css';
import App,{ AppContext, AppInitialProps, AppProps } from 'next/app';
import siteContex from '@/src/context/siteContext';
import { useEffect, useMemo, useReducer } from 'react';
import { initialState, reducer } from '@/src/reducers/useSiteReducer';
import { SiteService } from '@/src/services';
import getConfig from "next/config";
import {AchievementsService} from '@/src/services/timelineService';
import axios from 'axios';

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

interface AppOwnProps extends AppProps{
}
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
CustomApp.getInitialProps = async(context:AppContext):Promise<AppOwnProps|AppInitialProps>=>{
  const {query: params} = context.router
  const ctx = await App.getInitialProps(context);
  const username = params && params["username"]?.toString() || ""
  const srcSite = new SiteService(API_URL)
  const srcAchivement = new AchievementsService(API_URL)
  const user = await srcSite.getSlugName(username);
  console.log("user: "+ username,user)
  const timeline = await srcAchivement.list(username);
  const response =await axios.get(`${API_URL}/courses`,{
    params:{
      username,
      limit:3,
    }
  })
  const courses = response.data
  return {
    ...ctx,
    pageProps:{
      user,
      timeline,
      courses
    }
  }
}

export default CustomApp;
