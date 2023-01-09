import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import * as yup from "yup";
import PulseLoader from "react-spinners/PulseLoader";
import SignUpInput from "../inputs/SignUpInput";
import { useState } from "react";
import DateofBirthSelect from "./dateofBirthSelect";
import GenderSelect from "./genderSelect";
import { postApi } from "../../api";
import { signUp } from "../../store/userSlice";
import ServerMessage from "./serverMessage";

const SignupForm = ({ close }) => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        bDay: new Date().getDate(),
        bMonth: new Date().getMonth() + 1,
        bYear: new Date().getFullYear(),
        gender: "",
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [serverMessage, setServerMessage] = useState({
        status: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handlePasswordVisbility = (e) => {
        if (e.target.value === "on") {
            setIsPasswordVisible((prev) => !prev);
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from(
        new Array(119),
        (_value, index) => currentYear - index
    );

    const getMonthName = (monthNum) => {
        const date = new Date();
        date.setMonth(monthNum - 1);
        return date.toLocaleString("en-US", { month: "short" });
    };

    const months = Array.from(new Array(12), (_val, index) =>
        getMonthName(index + 1)
    );

    const getNumOfDays = () => {
        return new Date(user.bYear, user.bMonth, 0).getDate();
    };

    const days = Array.from(
        new Array(getNumOfDays()),
        (_val, index) => index + 1
    );

    const signUpValidation = yup.object({
        firstName: yup
            .string()
            .required("What's your first name?")
            .min(2, "First name must have at least 2 characters.")
            .max(40, "First name must have at most 50 characters.")
            .matches(
                /^[a-zA-Z]+$/,
                "Numbers, spaces and special characters are not allowed."
            ),
        lastName: yup
            .string()
            .required("What's your last name?")
            .min(2, "Last name must have at least 2 characters.")
            .max(40, "Last name must have at most 50 characters.")
            .matches(
                /^[a-zA-Z]+$/,
                "Numbers, spaces and special characters are not allowed."
            ),
        username: yup.string().required("Provide a unique username"),
        email: yup
            .string()
            .required(
                "You'll use this when you login & if you ever need to change password."
            )
            .email("Enter a valid email address."),
        password: yup
            .string()
            .required(
                "Enter a combination of at least 6 numbers, letters and punctuation marks (such as ! and &)."
            )
            .min(6, "Password must have at least 6 characters")
            .matches(
                /(?=.*[0-9])(?=.*[^\w])/,
                "Must have at least a number and a punctuation marks (such as ! and &)"
            ),
    });

    const [ageValidationError, setAgeValidationError] = useState("");
    const [genderError, setGenderError] = useState("");

    const handleFormSubmit = async () => {
        setLoading(true);
        setServerMessage({
            status: "",
            message: "",
        });
        const currentDate = new Date();
        const pickedDate = new Date(user.bYear, user.bMonth - 1, user.bDay);
        const minAge = new Date(1970 + 14, 0, 1);
        if (currentDate - pickedDate < minAge) {
            setLoading(false);
            setAgeValidationError(
                "It looks like you've entered the wrong info. Please make sure you use your real Date of birth."
            );
        } else {
            setLoading(true);
            setAgeValidationError("");
            if (user.gender === "") {
                setLoading(false);
                setGenderError(
                    "Please choose a gender. You can change who can see this later."
                );
            } else {
                setLoading(true);
                setGenderError("");
                const response = await postApi("signup", user);
                const { status, message, token, ...userData } = response;
                if (status === "success") {
                    setServerMessage((prev) => ({
                        ...prev,
                        status,
                        message: message,
                    }));
                    setTimeout(() => {
                        dispatch(signUp(userData));
                        Cookies.set("token", token);
                        Cookies.set("user", JSON.stringify(userData));
                        Navigate("/");
                        setLoading(false);
                    }, 2500);
                } else if (status === "fail") {
                    setLoading(false);
                    setServerMessage((prev) => ({
                        ...prev,
                        status,
                        message: response.message,
                    }));
                }
            }
        }
    };

    return (
        <div className="backdrop-filter">
            <div className="signup-form">
                <div className="signup-header">
                    <h2>Sign Up</h2>
                    <p>It's quick and easy.</p>
                    <i className="exit_icon" onClick={close}></i>
                </div>
                <div className="divider"></div>
                <div className="signup-form-wrapper">
                    <Formik
                        enableReinitialize
                        initialValues={user}
                        validationSchema={signUpValidation}
                        onSubmit={handleFormSubmit}
                    >
                        {(_formik) => (
                            <Form className="form-input-wrapper">
                                <div className="user-row name-grp">
                                    <SignUpInput
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        onChange={handleOnChange}
                                    />
                                    <SignUpInput
                                        type="text"
                                        name="lastName"
                                        placeholder="Surname"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="user-row">
                                    <SignUpInput
                                        type="text"
                                        name="email"
                                        placeholder="Email address"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="user-row">
                                    <SignUpInput
                                        type="text"
                                        name="username"
                                        placeholder="User name"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="user-row">
                                    <SignUpInput
                                        type={
                                            isPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        placeholder="New password"
                                        onChange={handleOnChange}
                                    />

                                    <div className="toggle-password-wrapper">
                                        <input
                                            type="checkbox"
                                            name="toggle-password-visibility"
                                            id="toggle-password-visibility"
                                            onChange={handlePasswordVisbility}
                                        />
                                        <label htmlFor="toggle-password-visibility">
                                            Show password
                                        </label>
                                    </div>
                                </div>
                                <div className="user-col">
                                    <DateofBirthSelect
                                        ageValidationError={ageValidationError}
                                        days={days}
                                        months={months}
                                        years={years}
                                        handleOnChange={handleOnChange}
                                        user={user}
                                    />
                                </div>
                                <div className="user-col">
                                    <GenderSelect
                                        genderError={genderError}
                                        handleOnChange={handleOnChange}
                                    />
                                </div>
                                <div className="terms-condition-info">
                                    By clicking Sign Up, you agree to our{" "}
                                    <span>Terms</span>,{" "}
                                    <span>Privacy Policy</span> and{" "}
                                    <span>Cookies</span> <span>Policy</span>.
                                    You may receive SMS notifications from us
                                    and can opt out at any time.
                                </div>
                                <div className="signup-btn-wrapper">
                                    <button
                                        type="submit"
                                        className="create-account-btn"
                                    >
                                        {loading ? (
                                            <PulseLoader
                                                color="#fff"
                                                size={12}
                                                loading={loading}
                                                speedMultiplier={0.6}
                                            />
                                        ) : (
                                            "Sign Up"
                                        )}
                                    </button>
                                </div>
                                {!!serverMessage.status && (
                                    <ServerMessage
                                        serverMessage={serverMessage}
                                    />
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
