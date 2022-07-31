import type { NextPage } from 'next'
import  Carrusel from '@/components/carrusel'
import { useContext } from 'react'
import UserContex from '@/context/UserContext'
import { TimeLine } from '@/components/timeline'
import { Comentaries } from '@/components/comentaries'

const Home: NextPage = () => {
  const { user } = useContext(UserContex)
  return (
    <div>
      <Carrusel images={user?.profile.images_profile || []}/>
      {user?.profile.time_line_profile.length && (<TimeLine  data={user?.profile.time_line_profile.map(item=>(
        {
          year: item.year,
          description: item.comment
        }
      ))||[]}/>)}
      <Comentaries />
    </div>
  )
}

export default Home
