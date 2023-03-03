import React from "react";
import { Link } from "react-router-dom";
import { addMenuData } from "../../data/addMenu";
import { useClickOutside } from "../../hooks";

export const AddMenu = ({ addMenuRef, setIsAddMenuOpen }) => {
    useClickOutside(addMenuRef, () => setIsAddMenuOpen(false));
    return (
        <div className="user-menu-container">
            <div className="add-menu">
                <h2>Create</h2>
                <div className="user-main-menu">
                    {addMenuData.slice(0, 3).map((menu, index) => (
                        <Link
                            to={"#"}
                            className="user-row hover2"
                            key={`${menu.name}-${index}`}
                        >
                            <div className="user-row-left">
                                <div className="menu-circle">
                                    <i className={menu.icon}></i>
                                </div>
                                <div className="add-menu-right-grp">
                                    <h4 className="menu-name">{menu.name}</h4>
                                    <span>{menu.description}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <hr className="divider" />
                    {addMenuData
                        .slice(3, addMenuData.length)
                        .map((menu, index) => (
                            <Link
                                to={"#"}
                                className="user-row hover2"
                                key={`${menu.name}-${index}`}
                            >
                                <div className="user-row-left">
                                    <div className="menu-circle">
                                        <i className={menu.icon}></i>
                                    </div>
                                    <div className="add-menu-right-grp">
                                        <h4 className="menu-name">
                                            {menu.name}
                                        </h4>
                                        <span>{menu.description}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};
