export const validateUsername = (username) => {
  const regex = /^\S{3,8}$/;
  return regex.test(username);
};

export const usernameValidationMessage =
  'Please enter a valid username between 3 and 8 characters';
