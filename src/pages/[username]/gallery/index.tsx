import React from 'react';
import UserService from '@/src/services/userService';
import { GetStaticPaths, GetStaticProps } from 'next';
import getConfig from "next/config";
import { IGallery, IUser } from '@/src/models';
import Layout from '@/src/components/layaut';
import { GalleriesService, SiteService } from '@/src/services';
import Carrusel from '@/src/components/carrusel';

interface IGalleryProps{
  user:IUser;
  images: IGallery[]
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

  const galleryService = new GalleriesService(API_URL);
  const images = await galleryService.list(username)

  const service = new SiteService(API_URL);
  const user = await service.getSlugName(username)
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
