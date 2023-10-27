import * as React from 'react';
import Form,{TextField} from '../form/';
import useSite from '@/src/hooks/useSite';

interface Iprops{
  open: boolean;
  handleClose: ()=>void;
}
interface IloginData{
  userName?: string;
  password?:string;
}
interface IloginData{
  userName?: string;
  password?:string;
  confirmpassword?: string;
  firstName?:string;
  lastName?: string;
  email?:string;
}
export default function Login({open,handleClose}:Iprops) {
  return (
    <div>
      <Form onSubmit={console.log}>
        <TextField label='email' required name='email' />
        <TextField label='firsName' name='firstName'/>
        <input type="submit" value="showData" />
      </Form>
    </div>
  );
}