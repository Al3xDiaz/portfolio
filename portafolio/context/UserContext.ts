import React  from "react";
import { IUserState } from "@/models/user";

const UserContex =React.createContext<IUserState>({status: "loading"});

export default UserContex;