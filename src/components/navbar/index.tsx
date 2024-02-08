import useSite from "@/src/hooks/useSite"
import Link from "next/link"

export const Navbar = () => {
	const {state:{ownerSite,status}} = useSite()
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				{ownerSite?.profile && (
					<Link legacyBehavior href={`/${ownerSite?.username}/`}>
					<a>{ownerSite?.profile.first_name} {ownerSite?.profile.last_name}</a>
				</Link>
				)}
			</div>
			<menu>
			{ownerSite?.profile && (<>
				<Link legacyBehavior href={`/${ownerSite?.username}/courses`}><a>Courses</a></Link>
				<Link legacyBehavior href={`/${ownerSite?.username}/gallery`}><a>Gallery</a></Link>
				<Link legacyBehavior href={`/${ownerSite?.username}/projects`}><a>Projects</a></Link>
				<Link legacyBehavior href={`/${ownerSite?.username}/contact`}><a>Contact</a></Link>
			</>)}
			</menu>
		</nav>
	)
}

export default Navbar
