import React from "react";
import { useState } from "react";
import { useClickOutside } from "../../../hooks";
import { SettingsPrivacy } from "./SettingsPrivacy";
import { MainMenu } from "./MainMenu";
import { HelpSupport } from "./HelpSupport";
import { DisplayAccess } from "./DisplayAccess";

export const UserMenu = ({ user, userMenuRef, setIsUserMenuOpen }) => {
    const [visible, setVisible] = useState(0);
    useClickOutside(userMenuRef, () => setIsUserMenuOpen(false));

    return (
        <React.Fragment>
            <div
                className={`user-menu-container primary-menu ${
                    visible !== 0 ? "inactive" : ""
                }`}
            >
                <MainMenu setVisible={setVisible} />
            </div>
            <div
                className={`user-menu-container secondary-menu ${
                    visible !== 0 ? "active" : ""
                }`}
            >
                {visible === 1 ? (
                    <SettingsPrivacy setVisible={setVisible} />
                ) : null}

                {visible === 2 ? <HelpSupport setVisible={setVisible} /> : null}
                {visible === 3 ? (
                    <DisplayAccess setVisible={setVisible} />
                ) : null}
            </div>
        </React.Fragment>
    );
};
