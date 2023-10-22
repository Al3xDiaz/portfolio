import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'src/components/layaut'
import siteContex from 'src/context/siteContext'
import { useReducer } from 'react'
import { initialState, reducer } from 'src/reducers/useSiteReducer'

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
