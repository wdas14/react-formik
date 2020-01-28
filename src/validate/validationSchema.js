import * as Yup from 'yup';
import {validateLastname} from './validation-fields/lastname';

export const validationSchema = Yup.object().shape({
    lastname: validateLastname.lastname,
    email: Yup.string()
      .email('Invalid email pal')
      .required('Put ya email in!'),
});