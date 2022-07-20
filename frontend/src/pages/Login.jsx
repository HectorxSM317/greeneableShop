import React from "react";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from "@material-ui/core/Input";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userActions from '../redux/actions/userActions'

// import { toast } from 'react-toastify';
// import GoogleSignIn from "../components/GoogleSignIn";

function Login (props) {

  const ariaLabel = { 'aria-label': 'description' };

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  //form
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const handleSubmit = async (event) => {

//     event.preventDefault()

//     const logedUser = {
//       email: event.target[0].value,
//       password: event.target[1].value,
//       from: 'signInForm'
//     }
//     let res = await dispatch(userActions.signInUser(logedUser))
//     // await props.signInUser(logedUser)

//     if (res.data.success) {
//       try {
//         toast.success(res.data.message, {
//           position: "top-center",
//           autoClose: 7000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           });
//         navigate('/index', {replace:true})
//       } catch(error) {
        
//         console.log(error);
//       }
//     } else {
//       toast.error(res.data.message, {
//         position: "top-center",
//         autoClose: 7000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         });
//       console.log(res);
//       return logedUser
//     }
//   }

  return(
    <div className='w-full h-screen relative block'>

      
      <div className='w-full h-screen bg-blue-400 top-0 left-0 absolute opacity-60'></div>
      <div className='w-full h-screen flex flex-col absolute top-0 left-0 justify-center items-center'>
        <h2 className="text-2xl sm:text-6xl font-bold text-white">Login</h2>
        <Card className='w-full sm:w-1/2 h-fit p-10'>
          <Box
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <form  onSubmit="" action="#" className='flex flex-wrap justify-center items-center gap-3'>
              <div className='w-full'>
                <Input name="email" className='w-full' type='email' placeholder="example@gmail.com" inputProps={ariaLabel}/>
              </div>
              <div className="w-full">
                <Input
                  name="password"
                  required
                  className='w-full'
                  placeholder="Password"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={values.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div>
                <input type="submit" value="Log in" className='border-2 border-blue-600 hover:border-blue-500 transition-500 bg-blue-700 hover:bg-blue-600 px-4 py-1 text-white rounded-full font-bold text-xl transition-colors duration-300'>
                </input>
              </div>
              {/* <GoogleSignIn /> */}
            </form>
            <div className="flex w-full justify-center">
            <p>Don't have an account? <a href="http://localhost:3000/register" className="font-bold text-blue-400 underline">Sign up here</a></p>
          </div>
          </Box>
        </Card>
      </div>
      
      <div className='h-screen w-full' style={{height: 300}}>
        <img src="" className='w-full h-screen object-cover overflow-hidden' alt=''></img>
      </div>
      
    </div>
  )
}

export default Login