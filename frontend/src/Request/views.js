import { _get, _post } from "../Utils";
const API_URL = process.env.REACT_APP_API_URL || 'https://coderatbest.com/api'

export async function getViews() {
    const request = await _get({ uri: API_URL + "/views" });
    return request;
}
export const postView = async () => {
    const obj = {
        uri: API_URL + "/view"
    }
    const result = await _post(obj)
    return result;
}