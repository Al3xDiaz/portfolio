import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import TimeLine from '@/src/components/timeline';
import UserService from '@/src/services/userService';
import Layout from '@/src/components/layaut';
import getConfig from 'next/config';
import { Course, IUser, TimeLineProfile } from '@/src/models';
import Head from 'next/head';
import { ModalImage } from '@/src/utils'
interface iprops{
  user:IUser;
  timeline:TimeLineProfile[];
  courses: Course[];
}
const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;
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
  await setTimeout(console.log,1)
  return {
    props: {
      example:"hello"
    }
  }
}) satisfies GetStaticProps<{example:string}>
const Home: NextPage<iprops> = ({user,timeline,courses}) => {
  if (!user)
    return <div>not found</div>
  return (
    <Layout user={user}>
			<Head>
				<link
					rel="icon"
					href="/icon.svg"
					type="image/svg"
					sizes="any"
				/>
        <title>{`${user.profile.firstName} ${user.profile.lastName}`}</title>
				<meta name="twitter:card" content="summary" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="website" />
				<meta property="og:title" name="twitter:title" content={`web portfolio - ${user.profile.firstName} ${user.profile.lastName}`} />
				<meta property="og:description" name="twitter:description"
					content={user.profile.bio} />
				<meta property="og:image" name="twitter:image"
					content={user.profile.photo} />
				<meta property="og:url" name="twitter:url" content={`${BASE_URL}/${user.userName}`}></meta>
			</Head>
      <div style={{
        display:'grid',
        width:"100%",
        gridTemplateColumns:"10rem 1fr",
        alignItems:"start",
        paddingTop:"25px",
        paddingBottom:"25px",
      }}>
        <div style={{
          backgroundImage: `url(${user.profile.photo})`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "top center",
          borderRadius:"50%",
          padding:"1rem",
          aspectRatio:"1/1",
        }}>
        </div>
        <div>
        {user.profile.bio.split("\n").map((text,i)=>(
          <p key={i} style={{
            textAlign:"start",
            marginLeft:"1rem"
          }}>{text}</p>
        ))}
        </div>
      </div>
      <TimeLine data={timeline} />
      <div className='course-row'>
      {courses.map(({image},index) => (
        <div className='course-card' key={index}>
          <ModalImage
          small={image}
          large={image}
          />
        </div>
      ))}
      </div>
      <style jsx>{`
      .course-row{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
        overflow-x: hidden;
        overflow-y: hidden;
        height: 10rem;
        margin: 2rem 0;
      }
      .course-card{
        width: 100%;
        height: 100%;
        padding: 0px 1rem;
      }
      .content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-around;
        min-width: 30vw;
        min-height: 30vh;
      }
      .panel{
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 870px) {
        .content{
          display: grid;
          grid-template-columns: 1fr;
          justify-content: center;
          max-height: 90vh;
          max-width: 90vw;
        }
        .panel{
          display: none;
        }
      }
      `}</style>
    </Layout>
  )
}

export default Home;
