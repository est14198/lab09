import React from 'react';
import LoginNav from '../LoginNav/loginNav.jsx';
import LoginInputUser from '../LoginInputUser/loginInputUser.jsx';
import LoginInputPassword from '../LoginInputPassword/loginInputPassword.jsx';
import LoginSignUp from '../LoginSignUp/loginSignUp.jsx';
import LoginSubmit from '../LoginSubmit/loginSubmit.jsx';
import './style.css';

function LoginForm() {
  return (
    <form action="" class="form-login">
        <LoginNav />
        <LoginInputUser />
        <LoginInputPassword />
        <LoginSignUp />
        <LoginSubmit />
    </form>
  );
}

export default LoginForm;
