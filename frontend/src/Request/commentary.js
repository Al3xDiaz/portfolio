import { _get,_post } from "../Utils";
export async function getCommentarys() {
    const request = await _get({ uri: "/api/comentarys"});
    return request;
}
export  const  postCommentary=async(editform)=> {
    const obj ={
        uri:"/api/comentary",
        data: editform
    }
    const result= await _post(obj)
    return result;
}