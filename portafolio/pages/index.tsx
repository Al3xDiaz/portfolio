import type { NextPage } from 'next'
import  Carrusel from '@/components/carrusel'
import { useContext } from 'react'
import UserContex from '@/context/UserContext'
import TimeLine from '@/components/timeline'
import Commentaries from '@/components/commetaries'
import { IUserState } from '@/models/user'

const Home: NextPage = () => {
  const { user }:IUserState = useContext(UserContex);
  let images: string[]=[]
  if (user?.profile)
    images = [user.profile.image,...user.profile.images];
  return (
    <div>
      <Carrusel images={images} />
      <TimeLine data={user?.profile.time_line_profile} />
      <Commentaries />
    </div>
  )
}

export default Home;