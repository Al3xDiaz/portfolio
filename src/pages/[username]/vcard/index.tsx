import UserService from '@/src/services/userService';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
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

export default function Page() {
  const router = useRouter()
  return <p>Post: {router.query.username}</p>
}
