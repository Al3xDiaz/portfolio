import React from 'react';
import { GetStaticProps } from 'next';
import { IGallery, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import Head from 'next/head';
import Carrusel from '@/src/components/carrusel';
import portfolioData from '@/src/data/portfolio.json';
import { useSite } from '@/src/hooks/useSite';

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

  return { props: { user, images } }
}) satisfies GetStaticProps<IGalleryProps>

export const Gallery = ({user, images}: IGalleryProps) => {
  const { t } = useSite();

  return (
    <Layout user={user}>
      <Head><title>{t('gallery.title')} - {user.profile.firstName} {user.profile.lastName}</title></Head>

      <div className="page-header animate-fade-up">
        <h2 className="page-title">{t('gallery.title')}</h2>
        <p className="page-subtitle">{images.length}</p>
      </div>

      <div className="carousel-wrapper animate-fade-up delay-1">
        <Carrusel images={images.map(image => image.image)} />
      </div>

      <style jsx>{`
        .page-header {
          padding: 1.5rem 0 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: baseline;
          gap: 1rem;
        }
        .page-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #e2e8f0;
          letter-spacing: -0.02em;
        }
        .page-subtitle {
          font-size: 0.85rem;
          color: #94a3b8;
          text-align: left;
          margin: 0;
        }
        .carousel-wrapper {
          background: rgba(99, 102, 241, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}
export default Gallery;
