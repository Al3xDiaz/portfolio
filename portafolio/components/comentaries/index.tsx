import UserContex from "@/context/UserContext"
import useComentary from "@/hooks/useComentaries"
import { Avatar } from "@mui/material"
import { useContext } from "react"

export const Comentaries = () => {
    const {comentaries} = useComentary()
    const {user} = useContext(UserContex)
    return (
        <div>
            <div className="container" >
                <div className="col">
                    {
                        comentaries &&
                        comentaries.map(({content,id}) => (
                            <div className="row" key={id}>
                                {/* <Avatar alt="Remy Sharp" src={user?.profile.image}/> */}
                                <Avatar alt="Remy Sharp" src={user?.profile.image}/>
                                <div className="comentary">
                                    {content}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <style jsx>{`
                    .row{
                        justify-content: space-around;
                    }
                    .comentary{
                        display: flex;
                        flex-direction: row;
                        background-color: #fff;
                        border-radius: 10px;
                        padding: 1rem;
                        margin: 1rem 0;
                        width: 90%;
                    }
                `}</style>
            </div>
        </div>
    )
}