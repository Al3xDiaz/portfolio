import React,{useCallback, useState} from "react";
import Form from "form-with-state";
interface iformdata{
    content:string;
}
interface iprops {
    postCommentary:(formdata:any)=>Promise<boolean>;
}
export const CreateCommentary = ({postCommentary}:iprops)=>{
    const [error,setError] = useState("");
    const handlePost = useCallback((formData:iformdata)=>{
        setError("")
        postCommentary(formData).then((resp)=>{
            resp?setError(""):setError("Error: contact to administrator")
        }).catch((err)=>{
            setError(String(err))
        })
    },[])
    return (
    <div>
        <div className="content">
            <Form onSubmit={handlePost}>
                <span style={{color:"red"}}>{error}</span>
                <Form.TextArea required name="content" />
                <Form.Submit label='send' style={{backgroundColor:"var(--primary)",width:100}} />
            </Form>
        </div>
        <style jsx>{`
        .content{
            margin: 1rem;
            margin-left: 10rem;
            margin-right: 10rem;
        }
        `}</style>
    </div>
);
}