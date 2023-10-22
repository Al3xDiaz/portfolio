import useSite from "src/hooks/useSite"
import Link from "next/link"

export const Navbar = () => {
    const {state:{ownerSite}} = useSite()
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link href="/">
                    <a>{ownerSite?.profile.first_name} {ownerSite?.profile.last_name}</a>
                </Link>
            </div>
            <menu>
                <Link href="/courses">
				<a>Courses</a>
                </Link>
                <Link href="/gallery">
				<a>Gallery</a>
                </Link>
                <Link href="/projects">
				<a>Projects</a>
                </Link>
                <Link href="/contact">
				<a>Contact</a>
                </Link>
            </menu>
        </nav>
    )
}

export default Navbar