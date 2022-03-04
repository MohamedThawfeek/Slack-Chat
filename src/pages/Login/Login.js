import React from "react";
import logo from "../../assets/logo.png";
import { Button } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, google } from "../../Components/firebase/Firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { addUser } from "../../Components/Redux/action/User";

const Login = () => {
  const dispatch = useDispatch();
  const signin = async () => {
    const result = await signInWithPopup(auth, google);
    dispatch(addUser(result.user));
  };

  return (
    <div className="login">
      <img src={logo} alt="" />

      <h4>Our Slack Chat App</h4>

      <Button onClick={signin}>
        <GoogleIcon className="googleIcon" />
        SignIn with Google
      </Button>
    </div>
  );
};

export default Login;
