import * as React from 'react';
import Form from 'form-with-state/';
import {useSite} from '@/src/hooks/useSite';

interface Iprops{
	onSignUp?: ()=>void;
	onLoged?:()=>void;
}
interface IUser{
	username: string;
	password: string;
}
export const Login: React.FC<Iprops> = (props) => {
	const {login} =useSite()
	return (
		<div>
			<h4>Login</h4>
			<Form onSubmit={(data:IUser)=>login(data).then(()=>props.onLoged && props.onLoged())}>
				<Form.TextField label='user name' required name='username' />
				<Form.PasswordField required name='password'/>
				<div style={{display:"flex",justifyContent:"flex-end",margin:".3rem"}}>
					<a>Forgot your password?</a>
				</div>
				<Form.Submit label='login' style={{backgroundColor:"var(--primary)"}} />
				<div style={{display:"flex",justifyContent:"flex-start",margin:".3rem"}}>Don`t have an account yet?
				<a
					onClick={props.onSignUp}
				>Sign up for free!</a></div>
			</Form>
		</div>
	);
}
