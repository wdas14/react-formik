import * as Yup from 'yup';

export const validateLastname = {
    lastname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[a-zA-Z-]*$/, 'Come on, be real')
      .required('Input ya last name yo!')
}