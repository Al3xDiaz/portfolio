import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import	Carrusel from '@/src/components/carrusel';
import TimeLine from '@/src/components/timeline';
import Commentaries from '@/src/components/commetaries';
import {Login,SignUp} from '@/src/components/auth/';
import { Modal } from '@/src/components/Modal';
import UserService from '@/src/services/userService';
import Layout from '@/src/components/layaut';
import { SiteService } from '@/src/services';
import getConfig from 'next/config';
import { IUser, TimeLineProfile } from '@/src/models';
import AchievementsService from '@/src/services/timelineService';
import { useState } from 'react';
type modalType = "login" | "signup";
interface iprops{
  user:IUser;
  timeline:TimeLineProfile[];
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
  const srcSite = new SiteService(API_URL)
  const srcAchivement = new AchievementsService(API_URL)
  const user = await srcSite.getSlugName(username);
  const timeline = await srcAchivement.list(username);
  return { props: {
    user,
    timeline
  }}
}) satisfies GetStaticProps<iprops>
const Home: NextPage<iprops> = ({user,timeline}) => {
  const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [modal,setModal] = useState<modalType>("login");
	let images: string[]=[]
  images = [user.profile.photo,];
  if (!user)
    return <div>not found</div>
  return (
    <Layout user={user}>
      <Carrusel images={images} />
      <TimeLine data={timeline} />
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
