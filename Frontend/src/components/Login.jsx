import { useState } from "react";
import { Logo } from './Logo.jsx';
import { Input } from './Input.jsx';
import { useLogin } from '../shared/hooks';
import {
  emailValidationMessage,
  validateEmail,
  passwordValidationMessage,
  validatePassword
}
  from '../shared/validators'

export const Login = ( { switchAuthHandler } ) => {
  const { login, isLoading } = useLogin();

  const [formState, setFormState] = useState( {
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    },

  } );

  const handleInputValueChange = ( value, field ) => {
    setFormState( ( prevState ) => ( {
      ...prevState,
      [field]: {
        ...prevState[field],
        value: value,
        isValid: field === 'email' ? validateEmail( value ) : validatePassword( value ),
      },
    } ) );

  };

  const handleInputValidationOnBlur = ( value, field ) => {
    let isValid = false
    switch ( field ) {
      case 'email':
        isValid = validateEmail( value );
        break;
      case 'password':
        isValid = validatePassword( value );
        break;

      default:
        break;
    }
    setFormState( ( prevState ) => ( {
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid: isValid,
        showError: !isValid,
      },
    } ) );
  }

  const handleLogin = () => {
    event.preventDefault();

    login( formState.email.value, formState.password.value );
  }

  const isSubmitButtonDisabled = isLoading || !formState.email.isValid || !formState.password.isValid;

  return (
    <div className='login-container'>
      <Logo text={'Login KinalCast'} />
      <form className="auth-form">
        <Input
          field='email'
          label='Email'
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type='text'
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field='password'
          label='Password'
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type='password'
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />
        <button
          className='auth-form-button'
          onClick={handleLogin}
          disabled={isSubmitButtonDisabled}
        >
          Log in
        </button>
      </form>
      <span className='auth-form-switch-label' onClick={switchAuthHandler}>
        ¿No tienes una cuenta? Click aqui para registrarte
      </span>
    </div>
  );
};
