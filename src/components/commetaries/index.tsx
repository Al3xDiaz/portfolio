import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { RxAvatar } from "react-icons/rx"
import useCommentary from "@/src/hooks/useCommentary"
import {useSite} from "@/src/hooks/useSite";
import { CreateCommentary } from "./createCommentary";

interface IProps {
}

export const Commentaries = ({}:IProps) => {
		const {commentaries,getCommentaries} = useCommentary();
		const {createCommentary,deleteCommentary} = useCommentary()
		const {state} = useSite()
		const stateRef = useRef(state)
		const postCommentary = useCallback(async(formData:{content:string}) =>{
      try {
          await createCommentary(formData.content);
          await getCommentaries()
      } catch {
          console.log("error: send comentary")
      }
		},[createCommentary,getCommentaries])
		const handleDelete = useCallback(async (id?:number)=>{
				id && await deleteCommentary(id);
				await getCommentaries()
		},[deleteCommentary,getCommentaries])
		useEffect(()=>{
				stateRef.current = state
		},[state])

		return(<div>
						<div className="commentaries-body">
								{commentaries.map((item,i)=>(<div className="commentary" key={item.id}>
										<RxAvatar size={50}/>
										<div className="content"><p>{item.comment}</p>{stateRef.current.visitor?.id == item.userId && <span onClick={()=>handleDelete(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/></svg></span>}</div>
								</div>))}
						</div>
						<CreateCommentary postCommentary={postCommentary} />
				<style jsx>{`
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
								position: relative;
								{/* background-color: #ffffff; */}
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
						.content span {
								position: absolute;
								right: .5rem;
								top: 1rem;
								color: red;
								cursor: pointer;
						}
				`}</style>
		</div>)
}
export default Commentaries;
