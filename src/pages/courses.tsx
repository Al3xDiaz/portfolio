import React from 'react';
import { ModalImage } from '@/src/utils'
import { GetStaticProps } from 'next';
import { Course, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import Head from 'next/head';
import portfolioData from '@/src/data/portfolio.json';
import { useSite } from '@/src/hooks/useSite';

interface ICoursesProps{
  courses: Course[];
  user:IUser;
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

  const courses = data.courses;

  return { props: {
    courses,
    user} }
}) satisfies GetStaticProps<ICoursesProps>

export const Courses = ({courses,user}:ICoursesProps) => {
  const { t } = useSite();
  
  return (
    <Layout user={user}>
      <Head><title>{t('courses.title')} - {user.profile.firstName} {user.profile.lastName}</title></Head>
      <div className='row'>
      {courses.map(({image},index) => (
        <div className='course' key={index}>
          <ModalImage
          small={image}
          large={image}
          width={300}
          height={200}
          />
        </div>
      ))}
      {courses.length==0&&<div>{t('courses.empty')}</div>}
      </div>
      <style jsx>{`
        .row{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 1rem 0px;
        }
        .course{
          margin: .5rem;
        }
      `}</style>
    </Layout>
  )
}
export default Courses;
