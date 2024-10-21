import * as yup from 'yup';


export const newPasswordSchema = yup.object().shape({
    username: yup.string().required("Please enter your user name."),
    newPassword: yup.string().required('Please enter your new password.')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter') // Ensures at least one uppercase letter
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
})

