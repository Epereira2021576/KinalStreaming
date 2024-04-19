export const validationAvatarUrl = (url) => {
  const regex = /^(ftp|http|https):\/\/[^ "]+$/;
  return regex.test(url);
};

export const avatarURLValidationMessage = 'This is not a valid URL';
