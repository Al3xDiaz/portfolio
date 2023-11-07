import * as React from 'react';
import Form from 'form-with-state';
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
        <Form.TextField label='First Name' required name='firstName' />
        <Form.TextField label='Last Name' required name='lastName' />
        <Form.TextField label='user name' required name='userName' />
        <Form.TextField label='Email' required name='email' />
        <Form.PasswordField label='password' required name='password' />
        <Form.PasswordField label='confirm password' required name='confirmPassword' />
        <Form.Submit label='sign up' style={{backgroundColor:"var(--primary)"}} />
        <p className="signin" style={{margin:".3rem"}}>Already have an acount ? <a onClick={props.onLogin}>Sign in</a> </p>
      </Form>
    </div>
  );
}