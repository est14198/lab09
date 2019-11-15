import React from 'react';
import './style.css';

function LoginInputUser() {
  return (
    <div>
      <label for="login-input-user" class="login__label">
			  Username
		  </label>
		  <input id="login-input-user" class="login__input" type="text" />
    </div>
  );
}

export default LoginInputUser;
