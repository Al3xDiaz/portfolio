import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layaut'
import siteContex from '@/context/siteContext'
import useSite from '@/hooks/useSite'

function App({ Component, pageProps }: AppProps) {
  const value = useSite()
  return (
    <siteContex.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </siteContex.Provider>
  )
}

export default App;
