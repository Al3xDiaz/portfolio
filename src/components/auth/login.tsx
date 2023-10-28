import * as React from 'react';
import Form,{Button, TextField} from '../form';
import useSite from '@/src/hooks/useSite';

interface Iprops{
  onSignUp?: ()=>void
}
interface IloginData{
  userName?: string;
  password?:string;
}
export const Login: React.FC<Iprops> = (props) => {
  return (
    <div>
      <h4>Login</h4>
      <Form onSubmit={console.log}>
        <TextField label='user name' required name='userName' />
        <TextField required name='password'/>
        <div style={{display:"flex",justifyContent:"flex-end",margin:".3rem"}}>
          <a>Forgot your password?</a>
        </div>
        <Button label='login' style={{backgroundColor:"var(--primary)"}} />
        <div style={{display:"flex",justifyContent:"flex-start",margin:".3rem"}}>Don`t have an account yet?
        <a
          onClick={props.onSignUp}
        >Sign up for free!</a></div>
      </Form>
    </div>
  );
}