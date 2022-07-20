import {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
// import {IconButton} from '@mui/material'
// import GoogleIcon from '@mui/icons-material/Google'
import userActions from '../redux/actions/userActions'

export default function GoogleSignUp({props}) {
    
    const dispatch = useDispatch()

    async function handleCallbackResponse(response) {// recibe una respuesta de google en forma d token
        let userObject = jwt_decode(response.credential)
        const userData = {
            firstName: userObject.given_name,
            lastName: userObject.family_name, 
            photo: userObject.picture, 
            email: userObject.email, 
            password: userObject.sub, 
            country: props,
   //         // role: 'user', 
            from: 'google'
        }
        
        dispatch(userActions.signUpUsers(userData))
    }

    useEffect(() => {
        /* global google */
        //window.onload = function(){
        google.accounts.id.initialize({ // inicia
            client_id: '77882146768-8qisgtqrvtatgsnmoe9o84ar09ad35u4.apps.googleusercontent.com',
            callback: handleCallbackResponse  //llama a la funcion 
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", size: "medium" }
        )
        //google.accounts.id.prompt();
    }
        //eslint-disable-next-line react-hooks/exhaustive-deps
     //}
     )

    return (
        <div>
            <div id='buttonDiv'>
                {/* <IconButton sx={{bgcolor: 'rgb(165, 126, 196)', color: 'white', height: '40px', '&:hover': {bgcolor: 'rgba(0, 0, 0, 0.5)'}}}>
                    <GoogleIcon />
                </IconButton> */}
            </div>
        </div>
    )
}