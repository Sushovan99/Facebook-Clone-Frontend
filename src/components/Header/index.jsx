import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "../../hooks";
import {
    Friends,
    Gaming,
    HomeActive,
    Logo,
    Market,
    Menu,
    Messenger,
    Notifications,
    Search,
    Watch,
    Return,
} from "../../svg";
import { AllSearchMenu } from "./AllSearchMenu";
import SearchMenu from "./SearchMenu";
import "./style.css";
import { UserMenu } from "./UserMenu";

const HeaderWithSearch = ({
    isSearchMenuOpen,
    setIsSearchMenuOpen,
    color,
    searchWrapRef,
    searchRef,
}) => {
    return (
        <div
            className={`header-left ${
                isSearchMenuOpen ? "search-menu-active" : "search-menu-inactive"
            }`}
            ref={searchWrapRef}
        >
            <button
                className={`circle-icon hover2 return-btn ${
                    isSearchMenuOpen ? "active" : ""
                }`}
                onClick={() => setIsSearchMenuOpen(false)}
            >
                <Return color={color} />
            </button>
            <div
                className={`search header-search`}
                onClick={() => {
                    setIsSearchMenuOpen(true);
                    searchRef.current.focus();
                }}
            >
                <span
                    className={`search-wrap ${
                        isSearchMenuOpen ? "hidden" : ""
                    }`}
                >
                    <Search color={color} />
                </span>
                <input
                    type="text"
                    placeholder="Search Facebook"
                    className="header-hide-input"
                    // style={{ width: "220px" }}
                    ref={searchRef}
                />
            </div>
            {isSearchMenuOpen ? <SearchMenu /> : null}
        </div>
    );
};

const HeaderWithLogo = ({
    isSearchMenuOpen,
    color,
    setIsSearchMenuOpen,
    focus,
}) => {
    return (
        <div
            className={`header-left ${
                isSearchMenuOpen
                    ? "header-with-logo inactive"
                    : "header-with-logo active"
            }`}
        >
            <Link to="/">
                <div className="header-logo">
                    <div className="circle-icon">
                        <Logo />
                    </div>
                </div>
            </Link>
            <div
                className={`search header-search`}
                onClick={() => {
                    setIsSearchMenuOpen(true);
                    focus();
                }}
            >
                <span
                    className={`search-wrap ${
                        isSearchMenuOpen ? "hidden" : ""
                    }`}
                >
                    <Search color={color} />
                </span>
                <input
                    type="text"
                    placeholder="Search Facebook"
                    className="header-hide-input"
                />
            </div>
        </div>
    );
};

const Header = () => {
    const searchRef = useRef(null);
    const searchWrapRef = useRef(null);
    const allSearchMenuRef = useRef(null);
    const userMenuRef = useRef(null);
    const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
    const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
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
                <div ref={allSearchMenuRef}>
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
                            src={"/images/default_profile.png"}
                            alt="profile-avatar"
                        />
                    </button>
                    {isUserMenuOpen ? (
                        <UserMenu
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
