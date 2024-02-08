import { IUser, ISiteState } from "@/src/models/user";
import { IAction } from "@/src/reducers/types";
import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const baseURL = publicRuntimeConfig.API_URL;

export const initialState: ISiteState = {
		status: "loading",
		ownerSite: undefined,
		visitor: undefined,
		axiosInstance: axios.create({
				baseURL:baseURL,
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
					status: "loaded",
					visitor: action.payload,
					msgError:undefined,
				}
			case "SET_STATUS":
				return {
					...state,
					status: action.payload,
				}
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
