import * as Yup from 'yup'

export default () => {
  return {
    onboarding: Yup.object().shape({
      firstName: Yup.string()
        .max(20, 'Cannot be greater than 20 characters')
        .matches(/^[a-zA-Z]+$/, 'Please input a valid First Name')
        .required('First Name is required'),
      lastName: Yup.string()
        .max(20, 'Cannot be greater than 20 characters')
        .matches(/^[a-zA-Z]+$/, 'Please input a valid Last Name')
        .required('Last Name is required'),
      role: Yup.string().required('Role is required'),
      company: Yup.string().required('Company is required'),
      introduction: Yup.string().min(15, 'Cannot be less than 15 characters').required('Introduction is required'),
    }),
  }
}
