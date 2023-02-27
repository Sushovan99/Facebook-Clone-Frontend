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
        <div className="user-menu-container">
            {visible === 0 ? <MainMenu setVisible={setVisible} /> : null}

            {visible === 1 ? <SettingsPrivacy setVisible={setVisible} /> : null}
            {visible === 2 ? <HelpSupport setVisible={setVisible} /> : null}
            {visible === 3 ? <DisplayAccess setVisible={setVisible} /> : null}
        </div>
    );
};
