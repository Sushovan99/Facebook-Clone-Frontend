import React from "react";
import { Link } from "react-router-dom";
import { helpSupportData } from "../../../data/userMainMenu";

export const HelpSupport = ({ setVisible }) => {
    return (
        <div className="help-support-menu">
            <div className="help-support-header">
                <div
                    className="menu-circle hover2"
                    onClick={() => setVisible(0)}
                >
                    <i className="arrow_back_icon"></i>
                </div>
                <h2>Help & support</h2>
            </div>
            <div className="user-main-menu">
                {helpSupportData.map((menu, index) => (
                    <Link
                        to={"#"}
                        className="user-row hover2"
                        key={`${menu.name}-${index}`}
                    >
                        <div className="user-row-left">
                            <div className="menu-circle">
                                <i className={menu.icon}></i>
                            </div>
                            <h4 className="menu-name">{menu.name}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
