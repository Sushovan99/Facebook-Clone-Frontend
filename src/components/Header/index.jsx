import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useClickOutside } from "../../hooks";
import {
    Friends,
    Gaming,
    HomeActive,
    Market,
    Menu,
    Messenger,
    Notifications,
    Plus,
    Watch,
} from "../../svg";
import { AddMenu } from "./AddMenu";
import { AllSearchMenu } from "./AllSearchMenu";
import { HeaderWithLogo, HeaderWithSearch } from "./HeaderLeft";
import "./style.css";
import { UserMenu } from "./UserMenu";

const Header = () => {
    const userData = useSelector((state) => state.user.user);
    const searchRef = useRef(null);
    const searchWrapRef = useRef(null);
    const allSearchMenuRef = useRef(null);
    const userMenuRef = useRef(null);
    const addMenuRef = useRef(null);
    const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
    const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
    const color = "#65676b";
    useClickOutside(searchWrapRef, () => setIsSearchMenuOpen(false));

    return (
        <header className="header">
            <div className="header-left-wrap">
                <HeaderWithLogo
                    color={color}
                    isSearchMenuOpen={isSearchMenuOpen}
                    setIsSearchMenuOpen={setIsSearchMenuOpen}
                    focus={() => searchRef.current.focus()}
                />
                <HeaderWithSearch
                    color={color}
                    isSearchMenuOpen={isSearchMenuOpen}
                    setIsSearchMenuOpen={setIsSearchMenuOpen}
                    searchWrapRef={searchWrapRef}
                    searchRef={searchRef}
                />
            </div>

            <div className="header-middle">
                <Link to="/" className="header-middle-icon hover2">
                    <HomeActive />
                </Link>
                <Link to="/" className="header-middle-icon hover2 active">
                    <Watch color={color} />
                    <div className="header-middle-notifications">9+</div>
                </Link>
                <Link to="/" className="header-middle-icon hover2">
                    <Market color={color} />
                </Link>
                <Link to="/" className="header-middle-icon hover2">
                    <Friends color={color} />
                </Link>
                <Link to="/" className="header-middle-icon hover2">
                    <Gaming color={color} />
                </Link>
            </div>

            <div className="header-right">
                {/* <div className="circle-icon hover1">
                    <ArrowDown />
                </div> */}
                <div ref={allSearchMenuRef} className="all-menu-container">
                    <button
                        className={`circle-icon hover1 ${
                            isAllMenuOpen ? "active" : ""
                        }`}
                        onClick={() => setIsAllMenuOpen((prev) => !prev)}
                    >
                        <Menu
                            color={
                                isAllMenuOpen ? "var(--blue-color-dark)" : ""
                            }
                        />
                    </button>
                    {isAllMenuOpen ? (
                        <AllSearchMenu
                            setIsAllMenuOpen={setIsAllMenuOpen}
                            allSearchMenuRef={allSearchMenuRef}
                        />
                    ) : null}
                </div>

                <div className="add-menu-container" ref={addMenuRef}>
                    <button
                        className={`circle-icon hover1 ${
                            isAddMenuOpen ? "active" : ""
                        }`}
                        onClick={() => setIsAddMenuOpen((prev) => !prev)}
                    >
                        <Plus
                            width={"20px"}
                            height={"20px"}
                            color={
                                isAddMenuOpen ? "var(--blue-color-dark)" : ""
                            }
                        />
                    </button>
                    {isAddMenuOpen ? (
                        <AddMenu
                            addMenuRef={addMenuRef}
                            setIsAddMenuOpen={setIsAddMenuOpen}
                        />
                    ) : null}
                </div>

                <button className="circle-icon hover1">
                    <Messenger />
                </button>
                <button className="circle-icon hover1">
                    <Notifications />
                    <div className="header-right-notification">5+</div>
                </button>
                <div ref={userMenuRef}>
                    <button
                        className="header-profile circle-icon profile-active"
                        onClick={() => setIsUserMenuOpen((prev) => !prev)}
                    >
                        <img
                            src={
                                userData?.picture ||
                                "/images/default_profile.png"
                            }
                            alt="profile-avatar"
                        />
                    </button>
                    {isUserMenuOpen ? (
                        <UserMenu
                            user={userData}
                            userMenuRef={userMenuRef}
                            setIsUserMenuOpen={setIsUserMenuOpen}
                        />
                    ) : null}
                </div>
            </div>
        </header>
    );
};

export default Header;
