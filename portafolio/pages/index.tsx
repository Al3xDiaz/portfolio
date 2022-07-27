import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Carrusel from '@/components/carrusel'
import { useContext } from 'react'
import UserContex from '@/context/UserContext'
import { TimeLine } from '@/components/timeline'

const Home: NextPage = () => {
  const { user } = useContext(UserContex)
  return (
    <div className={styles.container}>
      <Carrusel images={user?.profile.images_profile || []}/>
      <TimeLine  data={user?.profile.time_line_profile.map(item=>(
        {
          year: item.year,
          description: item.comment
        }
      ))||[]}/>
    </div>
  )
}

export default Home
