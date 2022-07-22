import React from 'react';
import '../styles/signup.css';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions';
import axios from 'axios'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import GoogleSignUp from '../components/GoogleSignUp';
import { useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
// import toast  from 'react-hot-toast';
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat:wght@600&display=swap" rel="stylesheet"></link>


export default function LogIn(){

	const [ selectCountry , setSelectCountry ]= useState("");

		const dispatch = useDispatch()

		const [country, setCountry] = useState([])
		const [file, setFile] = useState()
		console.log(file)
		React.useEffect(() =>{
            axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setCountry(res.data))
    },[])

		const handleSubmit = async (event)=>{
			event.preventDefault()
			console.log(event);
			const userData = {
				firstName: event.target[2].value,
				lastName: event.target[3].value,
				email: event.target[4].value,
				password: event.target[5].value,
				photo: event.target[6].value,
				country: selectCountry,
				from: "signUp",
				role: "user"
			}

			const res = await dispatch(userActions.userSignUp(userData))
			console.log(res)
			// const errormsg = res.data.message
			// console.log(errormsg)
	// 		if (res.data.from === "validation") {
    //     errormsg.forEach(e => {
    //         toast.error(e.message)
    //     })
    // }
    // if (res.data.from === "form-Signup") {
    //     if (res.data.success) {
    //         // toast.success(res.data.message)
	// 		console.log(res.data.message);
    //    // navigate('/signin')
    //     } else {
    //         toast.error(res.data.message)
    //     }
    // }
};
		
		
		

    return(
        <>


    <div className='containerLogin'>
        
		<div className="box my-[5rem]">
			<input type="checkbox" id="toggle" className="box__toggle" hidden />
			
			<form className="form form--register" onSubmit={handleSubmit} >


				<div>
				<h1 className="form__title">Sign up</h1>
				<div className='nameCountry'>
				<h1>Select Country</h1>
				</div>

				<Select name="country" className='countryy' id="country" required defaultValue= "" onChange={p => setSelectCountry(p.target.value)}>
					<MenuItem value="">
					</MenuItem>
					{country.map((country,index) => <MenuItem key={index} value={country.name.common}>{country.name.common}</MenuItem>)}
				</Select>
				</div>
				{selectCountry && 

				<>
				
				<div className="form__helper">
					<input type="text" name="user" id="firstName" required placeholder="User" className="form__input" />
					<label className="form__label" >First Name</label>
					</div>

				<div className="form__helper">
					<input type="text" name="email" id="lastName" required placeholder="Last Name" className="form__input" />
					<label className="form__label" >Last Name</label>
				</div>

				<div className="form__helper">
					<input type="email"  id="email" placeholder="Password" required autoComplete='username' className="form__input" />
					<label className="form__label" >Email</label>
				</div>

				<div className="form__helper">
					<input type="password"  id="password signup" autoComplete='current-password' required placeholder="Confirm password" className="form__input" />
					<label className="form__label" >Password</label>
				</div>

				<div className="form__helper">
					<input type="text"  id="photo" placeholder="photo" required className="form__input" />
					<label className="form__label" >Photo</label>
				</div>
				<div className="form__helper">
					<input type="file" onChange={(e)=>setFile(e.target.files)} id="photo" placeholder="photo" required className="form__input" />
					<label className="form__label my-5" >Photo</label>
				</div>

				
				
				{/* <div className="form__helper">
					<input type="select" id="country" placeholder="Country" className="form__input" />
					<label className="form__label" >Country</label>
				</div> */}
				
				<div className='botongoogle'>
				<GoogleSignUp props={selectCountry}/>
				</div>

				<button type="submit" className="form__button">Register</button>
{/* 
					<a href="https://twitter.com" className="icon-button twitter"><img src={process.env.PUBLIC_URL + '/assets/twitter-gif.gif'} alt="twitter_log" /></a>
					<a href="https://facebook.com" className="icon-button facebook"><img src={process.env.PUBLIC_URL + '/assets/faceboock.gif'} alt="twitter_log" /></a>
					<a href="https://google.com" className="icon-button google-plus"><i className="icon-google-plus"></i><span></span></a>	
				 */}

				<p className="form__text">Already have an account? <label htmlFor="toggle" className="form__link"><LinkRouter to={'/SignIn'} >Sign in!</LinkRouter></label></p>
				
			</>}
			</form>



{/* 


				
			<form className="form form--login" onSubmit={handleSubmitLogIn}>
				<h1 className="form__title">Sign in</h1>

				<GoogleLogIn/>

				<div className="form__helper">
					<input type="email" name="user" id="user" placeholder="Email" autoComplete='username' className="form__input" />
					<label className="form__label" >User</label>
				</div>

				<div className="form__helper">
					<input type="password" name="password" id="password login" autoComplete='current-password' placeholder="Password" className="form__input" />
					<label className="form__label" >Password</label>
				</div>

				
				<button type="submit" className="form__button">Login</button>


				<p className="form__text">Don't have an account? <label htmlFor="toggle" className="form__link">Sign up!</label> </p>
			</form> */}
		</div>
	
    </div>




        </>
    )
}

