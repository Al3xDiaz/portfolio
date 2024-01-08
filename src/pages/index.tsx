import React from 'react';
import type { NextPage } from 'next';
import	Carrusel from '@/src/components/carrusel';
import TimeLine from '@/src/components/timeline';
import Commentaries from '@/src/components/commetaries';
import {Login,SignUp} from '@/src/components/auth/';
import useSite from '@/src/hooks/useSite';
import { Modal } from '@/src/components/Modal';

type modalType = "login" | "signup";

const Home: NextPage = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [modal,setModal] = React.useState<modalType>("login")

	const { state:{ownerSite} } = useSite();
	let images: string[]=[]
	if (ownerSite?.profile)
		images = [ownerSite.profile.image,...ownerSite.profile.images];
	return (
		<div>
			<Carrusel images={images} />
			<TimeLine data={ownerSite?.profile.time_line_profile} />
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
		</div>
	)
}

export default Home;
