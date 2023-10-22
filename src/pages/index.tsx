import React from 'react'
import type { NextPage } from 'next'
import  Carrusel from 'src/components/carrusel'
import TimeLine from 'src/components/timeline'
import Commentaries from 'src/components/commetaries'
import Login from 'src/components/login'
import useSite from 'src/hooks/useSite'

const Home: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { state:{ownerSite} } = useSite();
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