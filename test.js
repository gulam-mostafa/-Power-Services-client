import React from 'react';
import { getAuth, getRedirectResult, FacebookAuthProvider } from "firebase/auth";

const test = () => {



const auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });
    return (
        <div>
            <div></div>
            div
        </div>
    );
};

export default test;