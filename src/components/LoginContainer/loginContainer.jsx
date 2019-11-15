import React from 'react';
import LoginForm from '../LoginForm/loginForm.jsx';
import LoginForgot from '../LoginForgot/loginForgot.jsx';
import './style.css';

function LoginContainer() {
  return (
    <div className="login-container">
        <LoginForm />
        <LoginForgot />
    </div>
  );
}

export default LoginContainer;
