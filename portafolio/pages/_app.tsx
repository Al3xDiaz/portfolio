import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layaut'
import siteContex from '@/context/siteContext'
import { useReducer } from 'react'
import { initialState, reducer } from '@/reducers/useSiteReducer'

function App({ Component, pageProps }: AppProps) {

  const [state,dispatch]= useReducer(reducer,initialState);
  return (
    <siteContex.Provider value={{state,dispatch}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </siteContex.Provider>
  )
}

export default App;
