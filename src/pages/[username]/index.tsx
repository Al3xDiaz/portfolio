import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import TimeLine from '@/src/components/timeline';
import Commentaries from '@/src/components/commetaries';
import {Login,SignUp} from '@/src/components/auth/';
import { Modal } from '@/src/components/Modal';
import UserService from '@/src/services/userService';
import Layout from '@/src/components/layaut';
import { SiteService } from '@/src/services';
import getConfig from 'next/config';
import { Course, IUser, TimeLineProfile } from '@/src/models';
import AchievementsService from '@/src/services/timelineService';
import { useState } from 'react';
import Head from 'next/head';
import { ModalImage } from '@/src/utils'
import axios from 'axios';
type modalType = "login" | "signup";
interface iprops{
  user:IUser;
  timeline:TimeLineProfile[];
  courses: Course[];
}
const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;
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
  const username = params && params["username"]?.toString() || ""
  const srcSite = new SiteService(API_URL)
  const srcAchivement = new AchievementsService(API_URL)
  const user = await srcSite.getSlugName(username);
  const timeline = await srcAchivement.list(username);
  const response =await axios.get(`${API_URL}/courses`,{
    params:{
      username,
      limit:3,
    }
  })
  const courses = response.data
  return { props: {
    user,
    timeline,
    courses
  }}
}) satisfies GetStaticProps<iprops>
const Home: NextPage<iprops> = ({user,timeline,courses}) => {
  const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [modal,setModal] = useState<modalType>("login");
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
        gridTemplateColumns:"1fr 1.5fr",
        alignItems:"center",
        paddingTop:"25px",
        paddingBottom:"25px",
      }}>
        <div style={{
          backgroundImage: `url(${user.profile.photo})`,
          height:"200px",
          width:"200px",
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "top center",
          borderRadius:"50%",
        }}>
        </div>
        <div>
        {user.profile.bio.split("\n").map(text=>(
          <p>{text}</p>
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
      <Modal show={open} onClose={handleClose} title='Authentication'>
        <div className='content'>
          <div className='panel'>
            <div style={{
                  backgroundImage:"url(https://res.cloudinary.com/dd7jrtxu5/image/upload/v1696992603/login_svg.svg)",
                  height:"100%",
                  width:"100%",
                  backgroundSize:"contain",
                  backgroundRepeat:"no-repeat",
                  backgroundPosition: "center center",
                }}>
              </div>
              <p><a target='_black' href="https://www.freepik.es/vector-gratis/concepto-abstracto-sistema-control-acceso_12085707.htm">Imagen de vectorjuice</a> en Freepik</p>
            </div>
          <div>
            {modal == "login" && <Login onLoged={()=>setOpen(false)} onSignUp={()=>setModal('signup')} /> || <SignUp onLoged={()=>setOpen(false)} onLogin={()=>setModal('login')}/>}
          </div>
        </div>
      </Modal>
      <Commentaries unAuthorized={handleOpen}/>
      <style jsx>{`
        .course-row{
          margin: 1rem 0;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          overflow: scroll;
          width: 59rem;
        }
        .course-card{
          margin-bottom: 3rem;
          margin-left: 1rem;
          margin-right: 1rem;
          height: 200px;
          width: 300px;
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
