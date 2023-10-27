import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React from 'react'
import { IInput } from "..";

interface Iprops extends IInput  {
    id: string;
    label?: string;
    error?: boolean; 
    onChange?: (value: string)=>void;
}
export const Password = ({id,label="Password",onChange,error}:Iprops)=>{
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    return (
        <FormControl sx={{width:235}} error={error} size="small" variant="outlined" onChange={(event: React.ChangeEvent<HTMLInputElement>)=>onChange&&onChange(event.target.value)}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                id={id}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                }
                label={label}
            />
      </FormControl>
        )
}