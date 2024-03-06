import {IUser, ISiteStateStatus } from "@/src/models/user";
interface ISetSiteAction {
	type: "SET_SITE";
	payload: IUser;
}
interface ISetStatusAction {
	type: "SET_STATUS";
	payload: ISiteStateStatus;
}
interface IHiddenHeaderNFooter{
	type: "SET_HIDDEM_HF",
}
interface IDisplayHeaderNFooter{
	type: "SET_DISPLAY_HF",
}
interface ISetVisitorAction {
	type: "SET_VISITOR";
	payload: IUser;
}
interface ISetAxiosAction {
	type: "SET_AXIOS_INSTANCE";
	payload: string | null;
}
interface IErrorAction {
	type: "ERROR";
	payload: any;
}


export type IAction = ISetSiteAction | ISetStatusAction	| ISetVisitorAction | IErrorAction | IHiddenHeaderNFooter | IDisplayHeaderNFooter | ISetAxiosAction;
export default IAction;
