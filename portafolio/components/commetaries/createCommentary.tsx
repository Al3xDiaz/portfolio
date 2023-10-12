import { Button, TextField } from "@mui/material";
import React,{useState} from "react";
interface iprops {
    postCommentary?:(content:string)=>Promise<boolean>
}
export const CreateCommentary = ({postCommentary}:iprops)=>{
    const [content,setContent] = useState<string>("");
    const [error,setError] = useState<string>()
    return (
    <div>
        <div className="commentary-form">
            <div>
                <h4>Post new commentary</h4>
            </div>
            <div className="commentary-body">
                <label>Content</label>
                <TextField
                    id="outlined-multiline-static"
                    required
                    label={error}
                    multiline
                    error={!!error}
                    rows={4}
                    value={content}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setContent(event.target.value);
                    }}
                    onFocus={()=>setError(undefined)}
                    style={{
                        backgroundColor:"#fff",
                        borderRadius:"4px"
                    }}
                />
            </div>
            <div>
                <Button 
                    style={{alignSelf:"flex-end"}}
                    variant="contained"
                    color="success"
                    onClick={()=>{postCommentary && postCommentary(content.trim()).then((resp)=>{
                        resp && setContent("")
                    }).catch(err=>setError(err))}}
                >Send</Button>
            </div>
        </div>
        <style jsx>{`
            .commentary-form{
                background-color: var(--background);
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .commentary-form div {
                width: 70%;
                padding: 1rem;
            }
            .commentary-form div:last-child {
                display: flex;
                flex-direction: row-reverse;
            }
            .commentary-body{
                display: grid;
                grid-template-columns: 5rem 1fr;
                justify-items: stretch;
            }
        `}</style>
    </div>
);
}