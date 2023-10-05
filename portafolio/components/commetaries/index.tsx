import React from "react";
import { RxAvatar } from "react-icons/rx"
import useCommentary from "@/hooks/useCommentary"

export const Commentaries = () => {
    const {commentaries} = useCommentary();

    return(<div>
            <div className="commentaries-title">
                <h2>Commentaries</h2>
            </div>
            <div className="commentaries-body">
                {commentaries.map((item,i)=>(<div className="commentary" key={item.id} style={{flexDirection:i%2?"row-reverse":"row"}}>
                    <RxAvatar size={50}/>
                    <div className="content">{item.comment}</div>
                </div>))}
            </div>
        <style jsx>{`
            .commentaries-title{
                background-color: var(--primary);
                display: flex;
            }
            .commentaries-title h2 {
                margin: 1rem;
            }
            .commentaries-body{
                width: 100vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: var(--background);
            }
            .commentary{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 80%;
                margin: 1rem;
            }
            .content{
                background-color: #ffffff;
                max-width: 50rem;
                min-width: 20rem;
                padding: 1rem;
                border-radius: 1rem;
                --webkit-line-clamp: 4;
            }
        `}</style>
    </div>)
}
export default Commentaries;