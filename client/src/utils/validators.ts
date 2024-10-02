type LoginForm = {
  email: string;
  password: string;
};

export const validateLoginForm = ({ email, password }: LoginForm) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isMailValid = emailPattern.test(email);
  const isPasswordValid = password.length > 5;
  return isMailValid && isPasswordValid;
};
