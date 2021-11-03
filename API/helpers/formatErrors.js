const formatErrors = (errors) => {
  const formattedErrors = {};
  errors.array({ onlyFirstError: true }).forEach((error) => {
    if (!formattedErrors[error.param]) formattedErrors[error.param] = [];
    formattedErrors[error.param].push({ message: error.msg });
  });
  return formattedErrors;
};

export default formatErrors;
