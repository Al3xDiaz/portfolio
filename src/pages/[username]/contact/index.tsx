import React from 'react';
import styled from 'styled-components';
import Layout from '@/src/components/layaut';
import { IUser } from '@/src/models';
import { SiteService } from '@/src/services';
import UserService from '@/src/services/userService';
import { GetStaticPaths, GetStaticProps } from 'next';
import getConfig from 'next/config';
import Commentaries from '@/src/components/commetaries';

interface IContactProps{
  user: IUser;
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
  const user = await service.getSlugName(username)
  return { props: {user}  }
}) satisfies GetStaticProps<IContactProps>
export const ContactPage = (props:IContactProps)=>{
  return <Layout user={props.user}>
    <P>
      <a href="https://linkedin.com/in/al3xdiaz" target="blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="@al3xdiaz"/></a>
      <a href="https://github.com/al3xdiaz" target="blank"><img src="https://camo.githubusercontent.com/e9a9f60cb13de944bc8dfefadf8c38a162ac2d36a0934455e9cd89aad4ea6132/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d2532333030616365652e7376673f636f6c6f723d313831373137267374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" alt="@al3xdiaz"/></a>
      <a href="https://gitlab.com/al3xdiaz" target="blank"><img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" alt="@al3xdiaz"/></a>
      <a href = "https://twitter.com/al3xsierra" target="blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="@al3xdiaz"  /></a>
      <a href = "https://discord.com/users/1028806986457960488" target="blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="@al3xdiaz"  /></a>
      <a href = "https://www.youtube.com/@al3xdiaz" target="blank"><img src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white" alt="@al3xdiaz"  /></a>
    </P>
    <Commentaries />
  </Layout>
}
const P = styled.p`
  margin: 1rem;
`;
export default ContactPage;
