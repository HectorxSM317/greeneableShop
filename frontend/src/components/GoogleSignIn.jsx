import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
// import { toast } from 'react-toastify';
import toast from "react-hot-toast";

export default function GoogleSignIn({ props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    let userObject = jwt_decode(response.credential);
    let res = dispatch(
      userActions.userSignIn({
        fullName: userObject.name,
        email: userObject.email,
        password: userObject.sub,
        userPicture: userObject.picture,
        country: props,
        from: "google",
      })
    );
    console.log(res);
    // if (res) {
    //   try {
    //     toast.success(res.data.message, {
    //       position: "top-left",
    //       autoClose: 7000,

    //       });
    //     navigate('/index', {replace:true})
    //   } catch(error) {

    //     console.log(error);
    //   }
    // } else {
    //   toast.error(res.data.message, {
    //     position: "top-left",
    //     autoClose: 7000,

    //     });
    //   return res
    // }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "523308192943-iae7rpp5oqk36bcmta9qu92stluqrut9.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "medium",
      locale: "en",
    });
  });

  return (
    <div>
      <div id="buttonDiv"></div>
    </div>
  );
}
