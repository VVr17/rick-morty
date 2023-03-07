import React from 'react';
import { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { getUserData } from 'api/googleapi';
import { RegisterButtonStyled } from './Register.styled';

const Register = () => {
  const [googleToken, setGoogleToken] = useState(null);

  const googleLogin = useGoogleLogin({
    onSuccess: codeResponse => {
      setGoogleToken(codeResponse.access_token);
    },
    onError: error => {
      console.log('Login Failed:', error);
    },
  });

  useEffect(() => {
    const getUserInfo = async () => {
      if (googleToken) {
        const response = await getUserData(googleToken);
        console.log('response', response);
      }
    };
    getUserInfo();
  }, [googleToken]);

  return (
    <>
      <RegisterButtonStyled
        onClick={() => {
          googleLogin();
        }}
      >
        GOOGLE SIGN IN
      </RegisterButtonStyled>
    </>
  );
};

export default Register;
