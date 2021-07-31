import { _get,_post } from "../Utils";
const API_URL=process.env.REACT_APP_API_URL

export async function getCommentarys() {
const request = await _get({ uri: API_URL+"/comentarys"});
    return request;
}
export  const  postCommentary=async(editform)=> {
    const obj ={
        uri:API_URL+"/comentary",
        data: editform
    }
    const result= await _post(obj)
    return result;
}