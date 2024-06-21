import React,{useCallback, useState} from "react";
import Form from "form-with-state";
interface iformdata{
		content:string;
}
interface iprops {
	postCommentary:(formdata:any)=>Promise<void>;
}
export const CreateCommentary = ({postCommentary}:iprops)=>{
  const [error,setError] = useState("");
  const handlePost = useCallback(async(data:any)=>{
    setError("")
    try {
      await postCommentary(data);
    } catch (error) {
      setError("Error: contact to administrator");
    }
  },[postCommentary])
  return (
  <div>
    <div className="content">
      <Form className="form-content" initialState={{}} onSubmit={handlePost}>
        <>
          <span style={{color:"red"}}>{error}</span>
          <Form.TextArea required name="content" />
          <Form.Submit name="send" label='send' style={{backgroundColor:"var(--primary)",width:100}} />
        </>
      </Form>
    </div>
    <style>{`
      .content{
        margin: 1rem;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
      }
      .form-content {
        display: grid;
        grid-template-areas: "content content content content content" "send . . . .";
      }
    `}</style>
  </div>
);
}
