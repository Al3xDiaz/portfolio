import * as React from 'react';
import Form,{Button, PasswordField, TextField} from '../form';
import useSite from '@/src/hooks/useSite';
import { IUser } from '@/src/models';

interface Iprops{
  onLogin?: ()=>void;
  onLoged?:()=>void;
}
interface IloginData{
  userName?: string;
  password?:string;
  confirmpassword?: string;
  firstName?:string;
  lastName?: string;
  email?:string;
}
export function SignUp(props:Iprops) {
  const {signUp} = useSite()
  return (
    <div>
      <h4>Register</h4>
      <Form onSubmit={(data:IUser)=>signUp(data).then(()=>props.onLoged && props.onLoged())}>
        <TextField label='First Name' required name='firstName' />
        <TextField label='Last Name' required name='lastName' />
        <TextField label='user name' required name='userName' />
        <TextField label='Email' required name='email' />
        <PasswordField label='password' required name='password' />
        <PasswordField label='confirm password' required name='confirmPassword' />
        <Button label='sign up' style={{backgroundColor:"var(--primary)"}} />
        <p className="signin" style={{margin:".3rem"}}>Already have an acount ? <a onClick={props.onLogin}>SignUp</a> </p>
      </Form>
    </div>
  );
}