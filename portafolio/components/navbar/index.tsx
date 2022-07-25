import { useContext } from "react"
import UserContex from "@/context/UserContext"
import Link from "next/link"

export const Navbar = () => {
    const {user} = useContext(UserContex)
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link href="/">
                    <a>{user?.profile.name}</a>
                </Link>
            </div>
            <menu>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/cursos">
                    <a>Cursos</a>
                </Link>
                <Link href="/habilidades">
                    <a>Habilidades</a>
                </Link>
                <Link href="/pasatiempos">
                    <a>Pasatiempos</a>
                </Link>
                <Link href="/contacto">
                    <a>Contacto</a>
                </Link>
            </menu>
        </nav>
    )
}

export default Navbar