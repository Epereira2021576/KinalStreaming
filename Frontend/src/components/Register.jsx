import { useState } from "react";
import { Logo } from './Logo.jsx';
import { Input } from './Input.jsx';
import { useRegister } from '../shared/hooks';
import {
  emailValidationMessage,
  validateEmail,
  passwordValidationMessage,
  validatePassword,
  usernameValidationMessage,
  validateUsername,
  validateConfirmPassword,
  confirmPasswordValidationMessage
}
  from '../shared/validators'

export const Register = ( { switchAuthHandler } ) => {
  const { register, isLoading } = useRegister();

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
    passwordConfirm: {
      value: '',
      isValid: false,
      showError: false
    },
    username: {
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
      case 'passwordConfirm':
        isValid = validateConfirmPassword( formState.password.value, value );
        break;
      case 'username':
        isValid = validateUsername( value );
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

  const handleRegister = () => {
    event.preventDefault();

    register( formState.email.value, formState.username.value, formState.password.value );
  }

  const isSubmitButtonDisabled = isLoading || !formState.email.isValid
    || !formState.password.isValid
    || !formState.passwordConfirm.isValid
    || !formState.username.isValid

  return (
    <div className='register-container'>
      <Logo text={'Register to KinalCast'} />
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
          field='username'
          label='Username'
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          type='text'
          showErrorMessage={formState.username.showError}
          validationMessage={usernameValidationMessage}
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
        <Input
          field='passwordConfirm'
          label='Password Confirmation'
          value={formState.passwordConfirm.value}
          onChangeHandler={handleInputValueChange}
          type='password'
          showErrorMessage={formState.passwordConfirm.showError}
          validationMessage={confirmPasswordValidationMessage}
          onBlurHandler={handleInputValidationOnBlur}
        />

        <button
          className='auth-form-button'
          onClick={handleRegister}
          disabled={isSubmitButtonDisabled}
        >
          Register
        </button>
      </form>
      <span className='auth-form-switch-label' onClick={switchAuthHandler}>
        Ya tienes una cuenta? Click aqui para Iniciar sesion
      </span>
    </div>
  );
};
