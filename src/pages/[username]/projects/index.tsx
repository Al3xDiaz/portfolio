import React, { useCallback, useEffect, useState } from 'react';
import { ModalImage } from '@/src/utils'
import UserService from '@/src/services/userService';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import getConfig from "next/config";
import { IProject, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import { ProjectsService, SiteService } from '@/src/services';
import Head from 'next/head';

interface IProjectsProps{
  projects: IProject[];
  user:IUser;
}

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

export const getStaticPaths = (async () => {
	// ...
	const service = new UserService()
	const userNames = await service.getUserNames()
	return {
		paths: userNames.map((userName) => ({
			params: {
				username: userName,
			},
		})),
		fallback: false,
	};
}) satisfies GetStaticPaths
export const getStaticProps = (async ({params}) => {
  const username = params && params["username"]?.toString() || ""
  const projectService = new ProjectsService(API_URL)

  const projects =await projectService.list(username);
  const service = new SiteService(API_URL);
  const user = await service.getSlugName(username)
  return { props: {
    projects,
    user} }
}) satisfies GetStaticProps<IProjectsProps>

export const ProjectsPage = ({projects,user}:IProjectsProps) => {
  return (
    <Layout user={user}>
      <Head><title>Projects - {user.profile.firstName} {user.profile.lastName}</title></Head>
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
      {projects.length==0&&<div>there are no projects yet</div>}
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
