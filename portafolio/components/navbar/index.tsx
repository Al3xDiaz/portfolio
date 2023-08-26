import { useContext } from "react"
import UserContex from "@/context/UserContext"
import Link from "next/link"

export const Navbar = () => {
    const {user} = useContext(UserContex)
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link href="/">
                    <a>{user?.profile.first_name} {user?.profile.last_name}</a>
                </Link>
            </div>
            <menu>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/courses">
				<a>Courses</a>
                </Link>
                <Link href="/skills">
				<a>Skills</a>
                </Link>
                <Link href="/hobbies">
				<a>Hobbies</a>
                </Link>
                <Link href="/contact">
				<a>Contact</a>
                </Link>
            </menu>
        </nav>
    )
}

export default Navbar