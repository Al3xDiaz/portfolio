import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { RxAvatar } from "react-icons/rx"
import useCommentary from "@/src/hooks/useCommentary"
import useSite from "@/src/hooks/useSite";
import { CreateCommentary } from "./createCommentary";

interface IProps {
    unAuthorized?:()=>void
}

export const Commentaries = ({unAuthorized}:IProps) => {
    const {commentaries} = useCommentary();
    const {createCommentary} = useCommentary()
    const {state} = useSite()
    const stateRef = useRef(state)
    const postCommentary = useCallback(async(formData:{content:string}) =>{
        console.log(state)
        if (!stateRef.current.visitor){
            unAuthorized && unAuthorized();
            return false
        }
        else
            createCommentary(formData.content)
        return true
    },[stateRef])

    useEffect(()=>{
        stateRef.current = state
    },[state])

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