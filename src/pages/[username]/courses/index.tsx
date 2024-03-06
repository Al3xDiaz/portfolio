import React, { useCallback, useEffect, useState } from 'react';
import { ModalImage } from '@/src/utils'
import UserService from '@/src/services/userService';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import getConfig from "next/config";
import { Course, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import { SiteService } from '@/src/services';
import Head from 'next/head';

interface ICoursesProps{
  courses: Course[];
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
  const service = new SiteService(API_URL);

  const {data} =await axios.get(`${API_URL}/courses`,{
    params:{
      username,
    }
  })
  const user = await service.getSlugName(username)
  return { props: {
    courses:data,
    user} }
}) satisfies GetStaticProps<ICoursesProps>

export const Courses = ({courses,user}:ICoursesProps) => {
  return (
    <Layout user={user}>
      <Head><title>Courses - {user.profile.firstName} {user.profile.lastName}</title></Head>
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
