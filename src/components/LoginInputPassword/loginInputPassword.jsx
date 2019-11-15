import React from 'react';
import './style.css';

function LoginInpuPassword(props) {
  return (
    <div>
      <label for="login-input-password" class="login__label">
			  Password
		  </label>
		  <input id="login-input-password" class="login__input" type="password" onMouseOver={props.onMouseOver}/>
    </div>
  );
}

export default LoginInpuPassword;
