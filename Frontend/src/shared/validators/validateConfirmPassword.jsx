export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const confirmPasswordValidationMessage = 'Passwords do not match';
