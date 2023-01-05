import { Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginInput from "../inputs/LoginInput";

const LoginForm = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const { email, password } = login;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setLogin((prev) => ({ ...prev, [name]: value }));
    };

    const loginValidation = yup.object({
        email: yup
            .string()
            .required("Email is required.")
            .email("Enter a valid email"),
        password: yup.string().required("Password is required"),
    });
    return (
        <div>
            <div className="form-grp">
                <div className="top-grp">
                    <Formik
                        enableReinitialize
                        initialValues={{
                            email,
                            password,
                        }}
                        validationSchema={loginValidation}
                    >
                        {(formik) => (
                            <Form className="formik-form-grp">
                                <LoginInput
                                    placeholder={"Email address"}
                                    type="text"
                                    name="email"
                                    bottom={false}
                                    onChange={handleOnChange}
                                />
                                <LoginInput
                                    placeholder={"Password"}
                                    type="password"
                                    name="password"
                                    bottom={true}
                                    onChange={handleOnChange}
                                />
                                <button type="submit" className="login-btn">
                                    Log in
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <Link to="/" className="forgot-password">
                    Forgotten password?
                </Link>
                <div className="divider"></div>
                <div className="bottm-grp">
                    <button type="button" className="create-account-btn">
                        Create New Account
                    </button>
                </div>
            </div>
            <div className="create-page-container">
                <span>
                    <b>
                        <Link to="/">Create a Page</Link>
                    </b>{" "}
                    for a celebrity, brand or business.
                </span>
            </div>
        </div>
    );
};

export default React.memo(LoginForm);
