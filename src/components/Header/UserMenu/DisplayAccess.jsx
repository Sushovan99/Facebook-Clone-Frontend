import React from "react";

export const DisplayAccess = ({ setVisible }) => {
    return (
        <div className="display-access-menu">
            <div className="display-access-header">
                <div
                    className="menu-circle hover2"
                    onClick={() => setVisible(0)}
                >
                    <i className="arrow_back_icon"></i>
                </div>
                <h2>Display & accessibility</h2>
            </div>
            <div className="display-access-wrap">
                <div className="display-access-wrap-row">
                    <div className="menu-circle" style={{ width: "50px" }}>
                        <i className="dark_filled_icon"></i>
                    </div>
                    <div className="display-access-wrap-col">
                        <h4>Dark Mode</h4>
                        <span>
                            Adjust the appearance of Facebook to reduce glare
                            and give your eyes a break.
                        </span>
                        <label htmlFor="darkOff" className="hover2">
                            <span>Off</span>
                            <input type="radio" name="dark" id="darkOff" />
                        </label>
                        <label htmlFor="darkOn" className="hover2">
                            <span>On</span>
                            <input type="radio" name="dark" id="darkOn" />
                        </label>
                        <label htmlFor="automatic" className="hover2">
                            <span>
                                Automatic
                                <small>
                                    We'll automatically adjust the display based
                                    on your device's system settings.
                                </small>
                            </span>
                            <input type="radio" name="dark" id="automatic" />
                        </label>
                    </div>
                </div>
                <div className="display-access-wrap-row">
                    <div className="menu-circle" style={{ width: "50px" }}>
                        <i className="compact_icon"></i>
                    </div>
                    <div className="display-access-wrap-col">
                        <h4>Compact mode</h4>
                        <span>
                            Make your font size smaller so more content can fit
                            on the screen.
                        </span>
                        <label htmlFor="compactOff" className="hover2">
                            <span>Off</span>
                            <input
                                type="radio"
                                name="compact"
                                id="compactOff"
                            />
                        </label>
                        <label htmlFor="compactOn" className="hover2">
                            <span>On</span>
                            <input type="radio" name="compact" id="compactOn" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
