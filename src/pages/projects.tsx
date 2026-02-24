import React from 'react';
import { ModalImage } from '@/src/utils'
import { GetStaticProps } from 'next';
import { IProject, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import Head from 'next/head';
import portfolioData from '@/src/data/portfolio.json';
import { useSite } from '@/src/hooks/useSite';

interface IProjectsProps{
  projects: IProject[];
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

  const projects = data.projects.map((p: any) => ({
    ...p,
    startDate: p.startDate as any,
    endDate: p.endDate as any
  }));

  return { props: {
    projects,
    user} }
}) satisfies GetStaticProps<IProjectsProps>

export const ProjectsPage = ({projects,user}:IProjectsProps) => {
  const { t } = useSite();
  
  return (
    <Layout user={user}>
      <Head><title>{t('projects.title')} - {user.profile.firstName} {user.profile.lastName}</title></Head>
      <div className='row'>
      {projects.map((project,index) => (
        <div className='course' key={index}>
          <ModalImage
          small={project.image}
          large={project.image}
          width={300}
          height={200}
          />
        </div>
      ))}
      {projects.length==0&&<div>{t('projects.empty')}</div>}
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
export default ProjectsPage;
