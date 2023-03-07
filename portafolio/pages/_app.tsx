import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layaut'
import UserContex from '@/context/UserContext'
import useProfile from '@/hooks/useProfile'
import Axios from 'axios'
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
Axios.defaults.baseURL = publicRuntimeConfig.API_URL

function App({ Component, pageProps }: AppProps) {
  const { state } = useProfile()
  return (
    <UserContex.Provider value={state}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContex.Provider>
  )
}

export default App
