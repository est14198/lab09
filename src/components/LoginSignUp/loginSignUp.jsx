import React from 'react';
import './style.css';

function LoginSignUp(props) {
  return (
    <label for="login-sign-up" class="login__label--checkbox">
		  <input onClick={props.onClick} id="login-sign-up" type="checkbox" class="login__input--checkbox" />
		  Keep me Signed in
	  </label>
  );
}

export default LoginSignUp;
