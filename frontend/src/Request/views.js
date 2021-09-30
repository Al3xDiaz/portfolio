import { _get,_post } from "../Utils";
const API_URL=process.env.REACT_APP_API_URL || 'https://coderatbest.com/api'

export async function getComentarys() {
const request = await _get({ uri: API_URL+"/comentarys"});
    return request;
}
export  const  postComentary=async(editform)=> {
    const obj ={
        uri:API_URL+"/comentary",
        data: editform
    }
    const result= await _post(obj)
    return result; 
}