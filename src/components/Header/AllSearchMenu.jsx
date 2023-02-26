import { useRef } from "react";
import { create, menu } from "../../data/allMenu";
import { useClickOutside } from "../../hooks";
import { AllMenuItem } from "./AllMenuItem";

export const AllSearchMenu = ({ setIsAllMenuOpen, allSearchMenuRef }) => {
    const inputRef = useRef(null);
    useClickOutside(allSearchMenuRef, () => setIsAllMenuOpen(false));
    return (
        <div className="all-search-menu">
            <div className="all-menu-header">Menu</div>
            <div className="all-menu-wrap scrollbar">
                <div className="all-menu-left">
                    <div
                        className="all-menu-search"
                        onClick={() => inputRef.current.focus()}
                    >
                        <i className="amm_s_ic"></i>
                        <input
                            type="text"
                            placeholder="Search menu"
                            ref={inputRef}
                        />
                    </div>
                    <div className="all-menu-grp">
                        <div className="all-menu-grp-header">Social</div>
                        {menu.slice(0, 6).map((item, index) => (
                            <AllMenuItem
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                key={`${item.name}-${index}`}
                            />
                        ))}
                    </div>
                    <div className="all-menu-grp">
                        <div className="all-menu-grp-header">Entertainment</div>
                        {menu.slice(6, 9).map((item, index) => (
                            <AllMenuItem
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                key={`${item.name}-${index}`}
                            />
                        ))}
                    </div>
                    <div className="all-menu-grp">
                        <div className="all-menu-grp-header">Shopping</div>
                        {menu.slice(9, 11).map((item, index) => (
                            <AllMenuItem
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                key={`${item.name}-${index}`}
                            />
                        ))}
                    </div>
                    <div className="all-menu-grp">
                        <div className="all-menu-grp-header">Personal</div>
                        {menu.slice(11, 15).map((item, index) => (
                            <AllMenuItem
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                key={`${item.name}-${index}`}
                            />
                        ))}
                    </div>
                    <div className="all-menu-grp">
                        <div className="all-menu-grp-header">Professional</div>
                        {menu.slice(15, 17).map((item, index) => (
                            <AllMenuItem
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                key={`${item.name}-${index}`}
                            />
                        ))}
                    </div>
                    <div className="all-menu-grp">
                        <div className="all-menu-grp-header">
                            Community resources
                        </div>
                        {menu.slice(17, 21).map((item, index) => (
                            <AllMenuItem
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                key={`${item.name}-${index}`}
                            />
                        ))}
                    </div>
                    <div className="all-menu-grp">
                        <div className="all-menu-grp-header">
                            More from Meta
                        </div>
                        {menu.slice(21, 23).map((item, index) => (
                            <AllMenuItem
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                key={`${item.name}-${index}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="all-menu-right">
                    <div className="all-menu-right-header">Create</div>
                    {create.slice(0, 3).map((item, index) => (
                        <div
                            className="all-menu-right-item hover2"
                            key={`${item.name}-${index}`}
                        >
                            <div className="all-menu-right-circle">
                                <i className={item.icon}></i>
                            </div>
                            {item.name}
                        </div>
                    ))}
                    <hr className="divider" />
                    {create.slice(3, 9).map((item, index) => (
                        <div
                            className="all-menu-right-item hover2"
                            key={`${item.name}-${index}`}
                        >
                            <div className="all-menu-right-circle">
                                <i className={item.icon}></i>
                            </div>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
