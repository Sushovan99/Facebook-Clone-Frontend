import React from "react";
import { Link } from "react-router-dom";

const footerTopLinks = [
    "English (UK)",
    "বাংলা",
    "हिन्दी",
    "اردو",
    "नेपाली",
    "ଓଡ଼ିଆ",
    "Español",
    "Português (Brasil)",
    "Français (France)",
    "Deutsch",
    "Italiano",
];

const footerBottomLinks = [
    "Sign Up",
    "Log in",
    "Messenger",
    "Facebook Lite",
    "Watch",
    "Places",
    "Games",
    "Marketplace",
    "Meta Pay",
    "Oculus",
    "Portal",
    "Instagram",
    "Bulletin",
    "Fundraisers",
    "Services",
    "Voting Information Centre",
    "Privacy Policy",
    "Privacy Centre",
    "Groups",
    "About",
    "Create ad",
    "Create Page",
    "Developers",
    "Careers",
    "Cookies",
    "AdChoices",
    "Terms",
    "Help",
    "Contact uploading and non-users",
];

const LoginFooter = () => {
    return (
        <footer className="login-footer">
            <div className="login-footer-wrap">
                {footerTopLinks.map((link, index) => (
                    <React.Fragment key={index}>
                        <Link to="#">{link}</Link>
                    </React.Fragment>
                ))}
                <Link to="#" className="footer_square">
                    <i className="plus_icon"></i>
                </Link>
            </div>
            <div className="divider footer-divider"></div>
            <div className="login-footer-wrap">
                {footerBottomLinks.map((link, index) => (
                    <React.Fragment key={index}>
                        <Link to="#">
                            {link}
                            {link === "AdChoices" ? (
                                <i className="adChoices_icon"></i>
                            ) : null}
                        </Link>
                    </React.Fragment>
                ))}
            </div>
            <div className="login-footer-wrap">
                <Link to="#" style={{ fontSize: "12px", marginTop: "10px" }}>
                    Meta © 2023
                </Link>
            </div>
        </footer>
    );
};

export default React.memo(LoginFooter);
