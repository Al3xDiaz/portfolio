import { IUser } from "@/src/models"
import Link from "next/link"

interface iprops{
  user?: IUser;
}
export const Navbar = ({user}:iprops) => {
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
		</nav>
	)
}

export default Navbar
