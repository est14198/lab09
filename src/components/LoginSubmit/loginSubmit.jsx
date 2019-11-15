import React from 'react';
import './style.css';

function LoginSubmit(props) {
  return (
    <button onClick={props.onClick} className="login__submit">Sign in</button>
  );
}

export default LoginSubmit;
