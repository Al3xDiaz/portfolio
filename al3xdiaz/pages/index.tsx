import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Carrusel from '@/components/carrusel/carrusel'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Carrusel />
    </div>
  )
}

export default Home
