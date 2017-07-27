export const formConfig = [{
  label: 'Email',
  name: 'email',
  placeholder: 'Email',
  type: 'email',
  config: {
    allowEmpty: false,
    message: 'Please enter an Email',
    required: true,
    type: 'string',
  },
}, {
  label: 'Password',
  name: 'password',
  placeholder: 'Password',
  type: 'password',
  config: {
    allowEmpty: false,
    message: 'Please enter a Password',
    required: true,
    type: 'string',
  },
}];

export const formDefaultValues = {
  email: 'diego@gmail.com',
  password: '123456',
};
