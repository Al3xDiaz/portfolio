import React, { useContext } from "react";
import { RxAvatar } from "react-icons/rx"
import useCommentary from "@/hooks/useCommentary"
import { CreateCommentary } from "./createCommentary";
import useSite from "@/hooks/useSite";

interface IProps {
    unAuthorized?:()=>void
}

export const Commentaries = ({unAuthorized}:IProps) => {
    const {commentaries,createCommentary} = useCommentary();
    const {state} = useSite()
    const postCommentary =async (content:string) =>{
        if (!content)
            throw "Comentary required";
        if (!!state.visitor){
            await createCommentary(content)
            return true
        }else{
            unAuthorized && await unAuthorized()
            return false
        }
    }

    return(<div>
            <div className="commentaries-title">
                <h2>Commentaries</h2>
            </div>
            <div className="commentaries-body">
                {commentaries.map((item,i)=>(<div className="commentary" key={item.id}>
                    <RxAvatar size={50}/>
                    <div className="content"><p>{item.comment}</p></div>
                </div>))}
            </div>
            <CreateCommentary postCommentary={postCommentary} />
        <style jsx>{`
            .commentaries-title{
                background-color: var(--primary);
                display: flex;
            }
            .commentaries-title h2 {
                margin: 1rem;
            }
            .commentaries-body{
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: var(--background);
            }
            .commentary{
                display: grid;
                justify-items: start;
                grid-template-columns: 5rem 1fr;

                width: 70%;
                margin: 1rem;
            }
            .content{
                background-color: #ffffff;
                width: 100%;
                border-radius: 1rem;
                padding: 1rem;
            }
            .content p {
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                text-align: left;
            }
        `}</style>
    </div>)
}
export default Commentaries;