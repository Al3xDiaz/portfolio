import React from 'react';
import { GetStaticProps } from 'next';
import { IGallery, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import Carrusel from '@/src/components/carrusel';
import portfolioData from '@/src/data/portfolio.json';

interface IGalleryProps{
  user:IUser;
  images: IGallery[]
}

export const getStaticProps = (async () => {
  const data = portfolioData as any;
  const { profile } = data;
  
  const user: IUser = {
    id: 1,
    userName: 'al3xdiaz',
    email: profile.email,
    verified: true,
    profile: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      photo: profile.photo,
      bio: profile.bio,
      jobs: profile.jobs,
      linkedin: profile.linkedin,
      github: profile.github,
      gitlab: profile.gitlab,
      discord: profile.discord,
      twitter: profile.twitter,
      facebook: profile.facebook,
      instagram: profile.instagram,
      youtube: profile.youtube,
      website: profile.website,
      images: [],
      time_line_profile: [],
      specialties: profile.specialties,
      skills: profile.skills,
      Languages: profile.languages,
      Hobbies: profile.hobbies,
      telephone: profile.telephone,
    }
  };

  const images = data.gallery;

  return { props: {
    user,
    images,
  } }
}) satisfies GetStaticProps<IGalleryProps>

export const Gallery = ({user,images}:IGalleryProps) => {
  return (
    <Layout user={user}>
      <div style={{display:'flex',width:"100%"}}>
      <Carrusel images={images.map(image=>image.image)} />
      </div>
      <style jsx>{`
      `}</style>
    </Layout>
  )
}
export default Gallery;
