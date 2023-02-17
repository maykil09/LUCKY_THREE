import * as yup from "yup";

export const agentSchema = yup.object().shape({
    firstName: yup.string().required("fist name is required"),
    lastName: yup.string().required("last name is required"),
    username: yup.string().required("username is required"),
    password: yup.string().min(5).required("password is required")
});

export const resultSchema = yup.object().shape({
    result: yup
        .number()
        .positive()
        .required("Required")
        .test(
            "len",
            "Result must be exactly 3 digits",
            (val) => val.toString().length === 3
        )
});

export const numberPickedSchema = yup.object().shape({
    number: yup
        .number()
        .positive()
        .required("Required")
        .test(
            "len",
            "Must be exactly 3 digits",
            (val) => val.toString().length === 3
        )
});

export const loginSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required")
});
