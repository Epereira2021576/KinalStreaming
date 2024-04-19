export const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const emailValidationMessage = 'This is not a valid email';
