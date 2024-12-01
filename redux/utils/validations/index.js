import * as yup from "yup";

export const signUpSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  })

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
})

export const userInfoFormSchema = yup.object({
  full_name: yup
    .string()
    .required("Enter your fullname.")
    .min(3, "Fullname must be at least 3 characters.")
    .max(50, "Fullname cannot exceed 50 characters."),
  location: yup
    .string()
    .required("Enter your location.")
    .min(3, "Location must be at least 3 characters.")
    .max(100, "Location cannot exceed 100 characters."),
  age: yup
    .number()
    .required("Please, enter your age.")
    .typeError("Age must be a number.")
    .integer("Age must be a whole number.")
    .min(18, "You must be at least 18 years old.")
    .max(120, "Age must not exceed 120."),
  content_creator: yup
    .string()
    .required("Answer this question please.")
    .oneOf(["Yes", "No"], "You must specify 'Yes' or 'No'."),
  production_name: yup
    .string()
    .required("Your preferred production name please.")
    .min(5, "Production name must be at least 5 characters.")
    .max(50, "Production name cannot exceed 50 characters.")
});


export const accountDetailsSchema = yup.object({
  bank_name: yup
    .string()
    .required("Enter your bank name.")
    .min(4, "Bank name must be at least 4 characters.")
    .max(50, "Bank name cannot exceed 50 characters."),
    
  account_number: yup
    .string()
    .required("Enter your account number.")
    .matches(/^\d+$/, "Account number must be a valid number.")
    .length(10, "Account number must be exactly 10 digits."),
    
  holder_name: yup
    .string()
    .required("Account holder's name please.")
    .min(5, "Account holder's name must be at least 5 characters.")
    .max(50, "Account holder's name cannot exceed 50 characters."),
});
