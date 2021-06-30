const validator = {
  require: {
    required: true,
    message: 'Required',
  },
  numbers: {
    pattern: /^[0-9]+$/,
    message: 'Only numbers',
  },
  maxlength4: {
    len: 4,
    message: 'Must be 4 characters',
  },
  maxlength7: {
    len: 7,
    message: 'Must be 7 characters',
  },
  maxlength10: {
    len: 10,
    message: 'Must be 10 characters',
  },
  maxlength15: {
    len: 15,
    message: 'Must be 15 characters',
  },
};

export default validator;
