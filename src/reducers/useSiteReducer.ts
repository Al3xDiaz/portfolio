import { IUser, ISiteState } from "@/src/models/user";
import { IAction } from "@/src/reducers/types";
import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

export const initialState: ISiteState = {
		status: "loading",
		ownerSite: undefined,
		visitor: undefined,
		header: true,
		footer: true,
		axiosInstance: axios.create({
				baseURL:API_URL,
		}),
};
export const reducer = (state: ISiteState, action:IAction ):ISiteState => {
	switch (action.type) {
		case "SET_SITE":
			return {
				...state,
				status: "loaded",
				ownerSite : action.payload,
				visitor: state.visitor,
				msgError:undefined,
			};
			case "SET_VISITOR":
				return {
					...state,
					visitor: action.payload,
					msgError:undefined,
				}
			case "SET_STATUS":
				return {
					...state,
					ownerSite:undefined,
					status: action.payload,
				}
			case "SET_HIDDEM_HF":
				return {
					...state,
					header: false,
					footer: false,
				}
			case "SET_DISPLAY_HF":
				return {
					...state,
					header: true,
					footer: true,
				}
      case "SET_AXIOS_INSTANCE":
        state.axiosInstance && state.axiosInstance.interceptors.request.use(function (config) {
          if (config.headers){
            config.baseURL = API_URL;
            config.headers.Accept = 'application/json';
            config.headers['Content-Type'] = 'application/json';
            config.withCredentials = true;
          }
          return config;
        });
        return state;
			case "ERROR":
				return {
					...state,
					status: "error",
					msgError:action.payload,
				};
		default:
			return state;
	}
}
