import React from "react";

const DateOfBirthSelect = ({
    ageValidationError,
    user,
    days,
    months,
    years,
    handleOnChange,
}) => {
    return (
        <React.Fragment>
            <div className="user-info-header">
                Date of birth <i className="info_icon"></i>
            </div>
            {!!ageValidationError ? (
                <div
                    className="error-message-container error-top"
                    style={{
                        marginBottom: "10px",
                        width: "100%",
                    }}
                >
                    {ageValidationError}
                </div>
            ) : null}
            <div className="user-date-grid">
                <select name="bDay" onChange={handleOnChange} value={user.bDay}>
                    {days.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <select
                    name="bMonth"
                    onChange={handleOnChange}
                    value={user.bMonth}
                >
                    {months.map((month, index) => (
                        <option key={month} value={index + 1}>
                            {month}
                        </option>
                    ))}
                </select>
                <select
                    name="bYear"
                    onChange={handleOnChange}
                    value={user.bYear}
                >
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </React.Fragment>
    );
};

export default React.memo(DateOfBirthSelect);
