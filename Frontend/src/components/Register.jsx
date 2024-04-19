export const Register = ({ switchAuthHandler }) => {
  return (
    <div className='register-container'>
      <span className='auth-form-switch-label' onClick={switchAuthHandler}>
        Este es el componente de register
      </span>
    </div>
  );
};
