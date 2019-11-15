import React from 'react';
import './style.css';

function LoginInpuPassword() {
  return (
    <div>
      <label for="login-input-password" class="login__label">
			  Password
		  </label>
		  <input id="login-input-password" class="login__input" type="password" />
    </div>
  );
}

export default LoginInpuPassword;
