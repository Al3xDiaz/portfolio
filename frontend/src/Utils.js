export const _get = async (obj) => {
    return new Promise((resolve, reject) => {
        fetch(obj.uri)
            .then((res) => {
                resolve(res.json())
            })
            .catch((err) => reject(err))
    })
}
export const _post = (obj) => {
    return new Promise((resolve, reject) =>{
        fetch(obj.uri,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(obj.data)
        })
        .then((res)=>{
            resolve(res.json())
        })
        .catch((err)=>reject(err))
     })
}
export const _put = (obj) => {

}
export const _delete = (obj) => {

}