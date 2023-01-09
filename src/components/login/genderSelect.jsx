import React from "react";

const GenderSelect = ({ genderError, handleOnChange }) => {
    return (
        <React.Fragment>
            <div className="user-info-header">
                Gender <i className="info_icon"></i>
            </div>
            {!!genderError ? (
                <div
                    className="error-message-container error-top"
                    style={{
                        marginBottom: "10px",
                        width: "100%",
                    }}
                >
                    {genderError}
                </div>
            ) : null}
            <div className="user-gender-grid">
                <label htmlFor="female">
                    Female
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={handleOnChange}
                    />
                </label>
                <label htmlFor="male">
                    Male
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={handleOnChange}
                    />
                </label>
                <label htmlFor="custom">
                    Custom
                    <input
                        type="radio"
                        name="gender"
                        id="custom"
                        value="custom"
                        onChange={handleOnChange}
                    />
                </label>
            </div>
        </React.Fragment>
    );
};

export default React.memo(GenderSelect);
