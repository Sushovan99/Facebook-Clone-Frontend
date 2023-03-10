import React from "react";
import "./style.css";
import LoginFooter from "../../components/login/loginFooter";
import LoginForm from "../../components/login/loginForm";
import SignupForm from "../../components/login/signupForm";
import { useState } from "react";

export const LoginPage = () => {
    const [signUpVisible, setSignUpVisible] = useState(false);
    return (
        <div className="login">
            <main className="login-main-container">
                <div className="login-sub-container">
                    <div className="banner-grp">
                        <img src="/icons/facebook.svg" alt="facebook-logo" />
                        <h2>
                            Facebook helps you connect and share with the people
                            in your life
                        </h2>
                    </div>
                    <LoginForm open={() => setSignUpVisible(true)} />

                    {signUpVisible ? (
                        <SignupForm close={() => setSignUpVisible(false)} />
                    ) : null}
                </div>
            </main>

            <LoginFooter />
        </div>
    );
};
