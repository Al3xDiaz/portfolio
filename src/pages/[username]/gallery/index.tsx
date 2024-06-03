import React, { useCallback, useEffect, useState } from 'react';
import { ModalImage } from '@/src/utils'
import UserService from '@/src/services/userService';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import getConfig from "next/config";
import { Course, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import { SiteService } from '@/src/services';
import Carrusel from '@/src/components/carrusel';

interface ICoursesProps{
  user:IUser;
}

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

export const getStaticPaths = (async () => {
	// ...
	const service = new UserService()
	const userNames = await service.getUserNames();
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

  const user = await service.getSlugName(username)
  return { props: {
    user} }
}) satisfies GetStaticProps<ICoursesProps>

export const Gallery = ({user}:ICoursesProps) => {
	let images: string[]=[user.profile.photo,];
  return (
    <Layout user={user}>
      <div style={{display:'flex',width:"100%"}}>
      <Carrusel images={images} />
      </div>
      <style jsx>{`
      `}</style>
    </Layout>
  )
}
export default Gallery;
