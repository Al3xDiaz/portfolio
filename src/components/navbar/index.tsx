import { IUser } from "@/src/models";
import Link from "next/link";
import Avatar from "@/src/components/Avatar";
import { useSite } from "@/src/hooks";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const baseURL = publicRuntimeConfig.API_URL;

interface iprops{
  user?: IUser;
}
export const Navbar = ({user}:iprops) => {
  const router = useRouter();
  const {state,logout} = useSite();

  const params = useSearchParams();
  useEffect(()=>{
    const token = params.get("token");
    if (!!token){
      axios.post(`${baseURL}/auth/validatecredetial`,{},{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      .then(()=>{
        router.replace({
          query: {
            username : router.query.username,
          }
        })
      })
      .catch(console.log)
    }
  },[params,router]);

  const HandleLogin = useCallback(()=>{
    router.replace(`https://dash.chaoticteam.com/login/?redirect=${location.href}`)
  },[router])

  const photo = state.visitor?.profile.photo;
  if (!user)
    return <nav className="navbar">
      <div className="navbar__logo">
          <Link legacyBehavior href={`/`}>
          <a>Home</a>
        </Link>
      </div>
    </nav>
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				{user.profile && (
					<Link legacyBehavior href={`/${user.userName}/`}>
					<a style={{textTransform:"capitalize"}}>{user.profile.firstName} {user.profile.lastName}</a>
				</Link>
				)}
			</div>
			<menu>
			{user.profile && (<>
				<Link legacyBehavior href={`/${user.userName}/courses`}><a>Courses</a></Link>
				<Link legacyBehavior href={`/${user.userName}/gallery`}><a>Gallery</a></Link>
				<Link legacyBehavior href={`/${user.userName}/projects`}><a>Projects</a></Link>
				<Link legacyBehavior href={`/${user.userName}/contact`}><a>Contact</a></Link>
			</>)}
			</menu>
      <Avatar photo={photo}>
        {!!state.visitor?<ul>
          <li><Link href="https://dash.chaoticteam.com/profile">Profile</Link></li>
          <li onClick={logout}>Sign out</li>
        </ul>:
        <ul>
          <li><a onClick={HandleLogin}>Sign in</a></li>
        </ul>}
      </Avatar>
      <style jsx>{`
        .navbar{
          display: grid;
          grid-template-columns: 10rem 1fr 3rem;
          align-items: center;
          padding: 0 1rem;
        }
        .navbar a:hover {
          background-color: #00000069;
          color: white;
        }
      `}</style>
		</nav>
	)
}

export default Navbar
