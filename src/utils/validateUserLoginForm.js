export const validateUserLoginForm = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (values.username && values.username.length < 6) {
    errors.username = "Must be at least 6 characters long";
  }
  if (values.password && values.password.length < 8) {
    errors.password = "Must be at least 8 characters long";
  }
  return errors;
};
