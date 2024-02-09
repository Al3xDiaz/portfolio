import React from 'react';
import { Image,ModalImage } from '@/src/utils'
import useSite from '@/src/hooks/useSite';
import UserService from '@/src/services/userService';
import { GetStaticPaths, GetStaticProps } from 'next';

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
export const getStaticProps = (async () => {
	await new Promise((resolve) => setTimeout(resolve, 1));
  return { props: { component:"index" } }
}) satisfies GetStaticProps<{
  component: string
}>

export const Courses = () => {
		const {state:{ownerSite}} = useSite()
		const courses = ownerSite?.courses || [];
		return (
				<div>
						<h1>Courses</h1>
						<div className='row'>
								{courses.map((course,index) => (
										<div className='course' key={index}>
												<ModalImage
												small={course}
												large={course}
												/>
										</div>
								))}
						</div>
						<style jsx>{`
								.row{
										display: flex;
										flex-wrap: wrap;
										justify-content: center;
								}
								.course{
										margin-bottom: 3rem;
										margin-left: 1rem;
										margin-right: 1rem;
										height: 200px;
										width: 300px;
								}
								`}</style>
				</div>
		)
}
export default Courses;
