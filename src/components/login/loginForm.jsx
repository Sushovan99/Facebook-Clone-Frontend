import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import LoginInput from "../inputs/LoginInput";
import { postApi } from "../../api";
import { login as Login } from "../../store/userSlice";
import Cookies from "js-cookie";
import ServerMessage from "./serverMessage";

const LoginForm = ({ open }) => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const [serverMessage, setServerMessage] = useState({
        status: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const { email, password } = login;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setLogin((prev) => ({ ...prev, [name]: value }));
    };

    const loginValidation = yup.object({
        email: yup
            .string()
            .required("Email is required.")
            .email("Enter a valid email."),
        password: yup.string().required("Password is required."),
    });

    const handleLoginSubmit = async () => {
        setLoading(true);
        const { status, message, token, ...userData } = await postApi(
            "login",
            login
        );
        if (status === "success") {
            setServerMessage((prev) => ({
                ...prev,
                status,
                message: message,
            }));
            dispatch(Login(userData));
            Cookies.set("token", token);
            Cookies.set("user", JSON.stringify(userData));
            Navigate("/");
            setLoading(false);
        } else if (status === "fail") {
            setLoading(false);
            setServerMessage((prev) => ({
                ...prev,
                status,
                message: message,
            }));
        }
    };

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
                        onSubmit={handleLoginSubmit}
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
                                    {loading ? (
                                        <PulseLoader
                                            color="#fff"
                                            size={12}
                                            loading={loading}
                                            speedMultiplier={0.6}
                                        />
                                    ) : (
                                        "Log in"
                                    )}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <Link to="#" className="forgot-password">
                    Forgotten password?
                </Link>
                <div className="divider"></div>
                <div className="bottm-grp">
                    <button
                        type="button"
                        className="create-account-btn"
                        onClick={open}
                    >
                        Create New Account
                    </button>
                </div>
                {!!serverMessage.status && (
                    <ServerMessage
                        serverMessage={serverMessage}
                        alignment="center"
                    />
                )}
            </div>
            <div className="create-page-container">
                <span>
                    <strong>
                        <Link to="#">Create a Page</Link>
                    </strong>{" "}
                    for a celebrity, brand or business.
                </span>
            </div>
        </div>
    );
};

export default LoginForm;
