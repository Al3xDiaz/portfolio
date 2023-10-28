import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form,{Password} from '../form';
import { TextField } from '@mui/material';
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
  const [signupShow,setSignupShow] = React.useState(true);
  const [loginInValidate,setLoginInValidate] = React.useState(false)
  const [signupInValidate,setSignupInValidate] = React.useState(false)
  const [loginDataForm,setLoginDataForm] = React.useState<IloginData>()
  const [signUpDataForm,setSignUpDataForm] = React.useState<IloginData>()
  const {login,signUp} = useSite()
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  className='modal-body' sx={{boxShadow:24,p:4,bgcolor:"var(--primary)",maxWidth:800}}>
         <div className='panel'>
         <div style={{
              backgroundImage:"url(https://res.cloudinary.com/dd7jrtxu5/image/upload/v1696992603/login_svg.svg)",
              height:"100%",
              width:"100%",
              backgroundSize:"contain",
              backgroundRepeat:"no-repeat",
              backgroundPosition: "center center",
            }}>
          </div>
          <p><a target='_black' href="https://www.freepik.es/vector-gratis/concepto-abstracto-sistema-control-acceso_12085707.htm">Imagen de vectorjuice</a> en Freepik</p>              
         </div>
         <div style={{
          margin:"1rem",
          display:!signupShow?"none":"block"
        }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sign In 
            </Typography>
            <form>
              <div className='row'>
                <TextField error={loginInValidate && !loginDataForm?.userName} size='small' label="UserName" variant="outlined"  onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
                  setLoginDataForm({...loginDataForm,userName:event.target.value})
                }} />
                <Password id='login-password' error={loginInValidate && !loginDataForm?.password} onChange={value=>setLoginDataForm({...loginDataForm,password:value})}/>
              </div><p>Don’t have an account?<a onClick={()=>setSignupShow(!signupShow)}> sign up</a></p>
              <Button 
                  style={{alignSelf:"flex-end"}}
                  size='small'
                  variant="contained"
                  color="success"
                  onClick={async ()=>{
                    try {
                      if (!!loginDataForm?.userName && !!loginDataForm?.password) {
                        await login(loginDataForm?.userName,loginDataForm?.password)
                        handleClose()
                      }else{
                        setLoginInValidate(true)
                      }
                    } catch (error) {
                      setLoginInValidate(true)                      
                    }
                  }}
              >Login</Button>
            </form>
         </div>
         <div style={{
          margin:"1rem",
          display:signupShow?"none":"block"
          }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sign Up
            </Typography>
            <form>
              <div className='row'>
                <TextField sx={{marginBottom:1}} size='small' label="UserName" variant="outlined" onChange={event=>setSignUpDataForm({...signUpDataForm,userName:event.target.value})} />
                <TextField sx={{marginBottom:1}} size='small' label="Email" variant="outlined" onChange={event=>setSignUpDataForm({...signUpDataForm,email:event.target.value})} />
                <TextField sx={{marginBottom:1}} size='small' label="Firs Name" variant="outlined" onChange={event=>setSignUpDataForm({...signUpDataForm,firstName:event.target.value})} />
                <TextField sx={{marginBottom:1}} size='small' label="Last Name" variant="outlined" onChange={event=>setSignUpDataForm({...signUpDataForm,lastName:event.target.value})} />
                <Password id='signup-password' onChange={value=>setSignUpDataForm({...signUpDataForm,password:value})} />
                <Password id='signup-password-confirm' label='Confirm Password' onChange={value=>setSignUpDataForm({...signUpDataForm,confirmpassword:value})} />
              </div><p>are you have an account?<a onClick={()=>setSignupShow(!signupShow)}> login</a></p>
              <Button
                  sx={{alignSelf:"flex-end"}}
                  variant="contained"
                  size='small'
                  color="success"
                  onClick={async()=>{
                    try {
                      if (!!loginDataForm?.userName && !!loginDataForm?.password) {
                        await login(loginDataForm?.userName,loginDataForm?.password)
                        handleClose()
                      }else{
                        setLoginInValidate(true)
                      }
                    } catch (error) {
                      setLoginInValidate(true)                      
                    }
                  }}
                  >SignUp</Button>
            </form>
         </div>
        </Box>
      </Modal>
        <style jsx>{`
          form{
            display: flex;
            flex-direction: column;
          }
        `}</style>
    </div>
  );
}