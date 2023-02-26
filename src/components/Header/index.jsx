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

const Header = () => {
    const searchRef = useRef(null);
    const searchWrapRef = useRef(null);
    const headerRighRef = useRef(null);
    const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
    const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);
    const color = "#65676b";
    useClickOutside(searchWrapRef, () => setIsSearchMenuOpen(false));

    return (
        <header className="header">
            <div
                className={`header-left ${
                    isSearchMenuOpen
                        ? "search-menu-active"
                        : "search-menu-inactive"
                }`}
                ref={searchWrapRef}
            >
                <Link
                    to="/"
                    style={{ display: isSearchMenuOpen ? "none" : "block" }}
                >
                    <div className="header-logo">
                        <div className="circle-icon">
                            <Logo />
                        </div>
                    </div>
                </Link>
                <button
                    className={`circle-icon hover2 return-btn ${
                        isSearchMenuOpen ? "active" : ""
                    }`}
                    onClick={() => setIsSearchMenuOpen(false)}
                >
                    <Return color={color} />
                </button>
                <div
                    className={`search header-search ${
                        isSearchMenuOpen ? "" : "menu-open"
                    }`}
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
                        ref={searchRef}
                    />
                </div>
                {isSearchMenuOpen ? <SearchMenu /> : null}
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

            <div className="header-right" ref={headerRighRef}>
                {/* <div className="circle-icon hover1">
                    <ArrowDown />
                </div> */}
                <div
                    className={`circle-icon hover1 ${
                        isAllMenuOpen ? "active" : ""
                    }`}
                    onClick={() => setIsAllMenuOpen((prev) => !prev)}
                >
                    <Menu
                        color={isAllMenuOpen ? "var(--blue-color-dark)" : ""}
                    />
                </div>
                <div className="circle-icon hover1">
                    <Messenger />
                </div>
                <div className="circle-icon hover1">
                    <Notifications />
                    <div className="header-right-notification">5+</div>
                </div>

                <Link to="/profile" className="header-profile">
                    <img
                        src="https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&w=1000"
                        alt="profile-pic"
                    />
                </Link>
                {isAllMenuOpen ? (
                    <AllSearchMenu
                        setIsAllMenuOpen={setIsAllMenuOpen}
                        allSearchMenuRef={headerRighRef}
                    />
                ) : null}
            </div>
        </header>
    );
};

export default Header;
