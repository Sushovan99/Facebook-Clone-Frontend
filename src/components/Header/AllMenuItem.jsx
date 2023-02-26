import React from "react";

export const AllMenuItem = ({ name, description, icon }) => {
    return (
        <div className="all-menu-item hover2">
            <img src={`/left/${icon}.png`} alt={name} />
            <div className="all-menu-col">
                <h4>{name}</h4>
                <span>{description}</span>
            </div>
        </div>
    );
};
