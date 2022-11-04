import * as Yup from "yup";

export const registerValidation = Yup.object({

   name:Yup.string()
  .max(15,'Must be 15 Characters or Less')
  .min(5,'Minumum five lettes required')
  .required('First name required'),

   email: Yup.string().email().required("Please enter your email"),
  
  })