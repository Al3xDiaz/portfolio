import type { NextPage } from 'next'
import  Carrusel from '@/components/carrusel'
import { useContext } from 'react'
import UserContex from '@/context/UserContext'
import { TimeLine } from '@/components/timeline'

const Home: NextPage = () => {
  const { user } = useContext(UserContex)
  return (
    <div>
      <Carrusel images={user?.profile.images?.map(image=>image.url) || []}/>
    </div>
  )
}

export default Home
