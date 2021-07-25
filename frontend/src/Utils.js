 const getdata=async (obj)=>{
     return new Promise((resolve, reject) =>{
        fetch(obj.uri)
        .then((res)=>{
            resolve(res.json())
        })
        .catch((err)=>reject(err))
     })
}
export const _get=async (obj)=>{
    const data=await getdata(obj)
    return data;
}
export const _post=(obj)=>{

}
export const _put=(obj)=>{

}
export const _delete=(obj)=>{

}