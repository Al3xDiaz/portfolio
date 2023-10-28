import { Button, TextField } from "@mui/material";
import React,{useState} from "react";
import Form,{TextArea} from "@/src/components/form";
interface iprops {
    postCommentary?:(content:string)=>Promise<boolean>
}
export const CreateCommentary = ({postCommentary}:iprops)=>{
    return (
    <div>
        <Form>
            <TextArea />
        </Form>
    </div>
);
}