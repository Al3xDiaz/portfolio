import type { GetStaticProps, NextPage } from 'next';
import TimeLine from '@/src/components/timeline';
import Layout from '@/src/components/layaut';
import { Course, IUser, TimeLineProfile } from '@/src/models';
import Head from 'next/head';
import { ModalImage } from '@/src/utils'
import portfolioData from '@/src/data/portfolio.json';
import { useSite } from '@/src/hooks/useSite';

interface iprops{
  user:IUser;
  timeline:TimeLineProfile[];
  courses: Course[];
}

export const getStaticProps = (async () => {
  const data = portfolioData as any;
  const { profile } = data;
  
  const user: IUser = {
    id: 1,
    userName: 'al3xdiaz',
    email: profile.email,
    verified: true,
    profile: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      photo: profile.photo,
      bio: profile.bio,
      jobs: profile.jobs,
      linkedin: profile.linkedin,
      github: profile.github,
      gitlab: profile.gitlab,
      discord: profile.discord,
      twitter: profile.twitter,
      facebook: profile.facebook,
      instagram: profile.instagram,
      youtube: profile.youtube,
      website: profile.website,
      images: [],
      time_line_profile: [],
      specialties: profile.specialties,
      skills: profile.skills,
      Languages: profile.languages,
      Hobbies: profile.hobbies,
      telephone: profile.telephone,
    }
  };
  
  const timeline = data.timeline.map((item: any) => ({
    ...item,
    profile: 1
  }));
  
  const courses = data.courses.slice(0, 3);

  return {
    props: {
      user,
      timeline,
      courses
    }
  }
}) satisfies GetStaticProps<iprops>

const Home: NextPage<iprops> = ({user,timeline,courses}) => {
  const { getLocalizedValue } = useSite();
  
  if (!user)
    return <div>not found</div>
    
  const localizedBio = getLocalizedValue(user.profile.bio);
  
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
					content={typeof user.profile.bio === 'string' ? user.profile.bio : user.profile.bio['es-LA']} />
				<meta property="og:image" name="twitter:image"
					content={user.profile.photo} />
				<meta property="og:url" name="twitter:url" content={user.profile.website}></meta>
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
        {localizedBio.split("\n").map((text: string, i: number)=>(
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
