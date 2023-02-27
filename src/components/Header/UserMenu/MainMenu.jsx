import { Link } from "react-router-dom";

export const MainMenu = ({ setVisible }) => {
    return (
        <div className="user-menu">
            <div className="user-menu-header">
                <div className="user-row hover2">
                    <img
                        src={
                            "https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&w=1000"
                        }
                        alt="profile-avatar"
                    />
                    <h4>Sushovan Biswas</h4>
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
                <div className="user-row hover2">
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
