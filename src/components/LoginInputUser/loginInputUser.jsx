import React from 'react';
import './style.css';

function LoginInputUser(props) {
  return (
    <div>
      <label for="login-input-user" class="login__label">
			  Username
		  </label>
		  <input id="login-input-user" class="login__input" type="text" value={props.value}/>
    </div>
  );
}

export default LoginInputUser;
