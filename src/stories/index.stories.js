import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginSubmit from '../components/LoginSubmit/loginSubmit';
import LoginSignUp from '../components/LoginSignUp/loginSignUp';
import LoginInputUser from '../components/LoginInputUser/loginInputUser';
import LoginInputPassword from '../components/LoginInputPassword/loginInputPassword';


storiesOf("Sign in Button", module)
  .add("on click", () => (
    <LoginSubmit onClick={action("clicked button")} />
  ));

storiesOf("Stay signed in Checkbox", module)
  .addParameters({
    backgrounds: [
      { name: 'purple', value: '#261448', default: true },
      { name: 'white', value: '#FFFFFF' },
      { name: 'lemon', value: '#EFFD5F'},
    ],
  })
  .add("on click", () => (
    <LoginSignUp onClick={action("clicked checkbox")} />
  ));

storiesOf("Login user Input", module)
  .addParameters({
    backgrounds: [
      { name: 'purple', value: '#261448', default: true },
    ],
  })
  .add("no text", () => (
    <LoginInputUser value={""}/>
  ))
  .add("with text", () => (
    <LoginInputUser value={"This is some text to test how it would look on this username input."}/>
  ));

storiesOf("Login password Input", module)
  .addParameters({
    backgrounds: [
      { name: 'purple', value: '#261448', default: true },
    ],
  })
  .add("hover", () => (
    <LoginInputPassword onMouseOver={action("hovered")}/>
  ))
