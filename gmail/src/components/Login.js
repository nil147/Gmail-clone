import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../features/userSlice";
import { auth, provider } from "../firebase";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <img
        src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
        alt="Logo"
      />
      <Button onClick={signIn}>Sign in</Button>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > button {
    text-transform: none;
  }

  > img {
    object-fit: contain;
    height: 200px;
  }
`;
