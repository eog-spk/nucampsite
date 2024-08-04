export const validateCommentForm = (values) => {
  const errors = {};
  if (!values.author) {
    errors.author = "Required";
  }
  if (!values.text) {
    errors.text = "Required";
  }
  if (!values.rating) {
    errors.rating = "Required";
  }
  if (values.author.length > 15) {
    errors.author = "Must be 15 characters or less";
  }
  if (values.author.length < 2) {
    errors.author = "Must be 2 characters or more";
  }
  return errors;
};
