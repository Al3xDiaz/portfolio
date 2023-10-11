import React from 'react'
import type { NextPage } from 'next'
import  Carrusel from '@/components/carrusel'
import { useContext } from 'react'
import UserContex from '@/context/siteContext'
import TimeLine from '@/components/timeline'
import Commentaries from '@/components/commetaries'
import { ISiteState } from '@/models/user'
import Login from '@/components/login'

const Home: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { state:{ownerSite} } = useContext(UserContex);
  let images: string[]=[]
  if (ownerSite?.profile)
    images = [ownerSite.profile.image,...ownerSite.profile.images];
  return (
    <div>
      <Carrusel images={images} />
      <TimeLine data={ownerSite?.profile.time_line_profile} />
      <Commentaries unAuthorized={handleOpen}/>
      <Login  open={open} handleClose={handleClose} />
    </div>
  )
}

export default Home;