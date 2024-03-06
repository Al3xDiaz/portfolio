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
  const handlePost = useCallback(async(formData:iformdata)=>{
    setError("")
    try {
      const data =await postCommentary(formData);
      data?setError(""):setError("Error: contact to administrator")
    } catch (err) {
      setError(String(err))
    }
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
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }
    `}</style>
  </div>
);
}
