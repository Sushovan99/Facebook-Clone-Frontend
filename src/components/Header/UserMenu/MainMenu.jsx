import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../../../store/userSlice";

export const MainMenu = ({ setVisible, user }) => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        Cookies.remove("user");
        Cookies.remove("token");
        Navigate("/login");
    };

    return (
        <div className="user-menu">
            <div className="user-menu-header">
                <div className="user-row hover2">
                    <img
                        src={user?.picture || "/images/default_profile.png"}
                        alt="profile-avatar"
                    />
                    <h4>
                        {user
                            ? `${user?.firstName} ${user?.lastName}`
                            : "Sushovan Biswas"}
                    </h4>
                </div>
                <hr className="divider" style={{ width: "90%" }} />
                <div className="user-row hover2">
                    <Link to="/profile" className="user-profile-link">
                        See your profile
                    </Link>
                </div>
            </div>
            <div className="user-main-menu">
                <div className="user-row hover2" onClick={() => setVisible(1)}>
                    <div className="user-row-left">
                        <div className="menu-circle">
                            <i className="settings_filled_icon"></i>
                        </div>
                        <h4 className="menu-name">Settings & privacy</h4>
                    </div>

                    <div className="rArrow">
                        <i className="right_icon"></i>
                    </div>
                </div>
                <div className="user-row hover2" onClick={() => setVisible(2)}>
                    <div className="user-row-left">
                        <div className="menu-circle">
                            <i className="help_filled_icon"></i>
                        </div>
                        <h4 className="menu-name">Help & Support</h4>
                    </div>

                    <div className="rArrow">
                        <i className="right_icon"></i>
                    </div>
                </div>
                <div className="user-row hover2" onClick={() => setVisible(3)}>
                    <div className="user-row-left">
                        <div className="menu-circle">
                            <i className="dark_filled_icon"></i>
                        </div>
                        <h4 className="menu-name">Display & Accessibility</h4>
                    </div>

                    <div className="rArrow">
                        <i className="right_icon"></i>
                    </div>
                </div>
                <div className="user-row hover2">
                    <div className="user-row-left">
                        <div className="menu-circle">
                            <i className="report_filled_icon"></i>
                        </div>
                        <h4 className="menu-name">Give feedback</h4>
                    </div>
                </div>
                <div className="user-row hover2" onClick={handleLogout}>
                    <div className="user-row-left">
                        <div className="menu-circle">
                            <i className="logout_filled_icon"></i>
                        </div>
                        <h4 className="menu-name">Logout</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
