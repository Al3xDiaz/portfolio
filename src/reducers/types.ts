import {IOwnerSite, IUser, ISiteStateStatus } from "@/src/models/user";
interface ISetSiteAction {
	type: "SET_SITE";
	payload: IOwnerSite;
}
interface ISetStatusAction {
	type: "SET_STATUS";
	payload: ISiteStateStatus;
}
interface ISetVisitorAction {
	type: "SET_VISITOR";
	payload: IUser;
}
interface IErrorAction {
	type: "ERROR";
	payload: any;
}


export type IAction = ISetSiteAction | ISetStatusAction	| ISetVisitorAction | IErrorAction;
export default IAction;
