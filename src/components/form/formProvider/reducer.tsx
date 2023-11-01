export interface IState {
    name: string;
    value: string | number | Date ;
}

interface ISetAction {
    type: "SET_PROP";
    payload: IState;
}


export type IAction = ISetAction;
export default IAction;