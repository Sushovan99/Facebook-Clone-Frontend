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
import SearchMenu from "./SearchMenu";
import "./style.css";

const Header = () => {
    const searchRef = useRef(null);
    const searchWrapRef = useRef(null);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const color = "#65676b";
    useClickOutside(searchWrapRef, () => setIsDropDownOpen(false));
    return (
        <header className="header">
            <div
                className={`header-left ${
                    isDropDownOpen
                        ? "search-menu-active"
                        : "search-menu-inactive"
                }`}
                ref={searchWrapRef}
            >
                <Link
                    to="/"
                    style={{ display: isDropDownOpen ? "none" : "block" }}
                >
                    <div className="header-logo">
                        <div className="circle-icon">
                            <Logo />
                        </div>
                    </div>
                </Link>
                <button
                    className={`circle-icon hover2 return-btn ${
                        isDropDownOpen ? "active" : ""
                    }`}
                    onClick={() => setIsDropDownOpen(false)}
                >
                    <Return color={color} />
                </button>
                <div
                    className={`search header-search ${
                        isDropDownOpen ? "" : "menu-open"
                    }`}
                    onClick={() => {
                        setIsDropDownOpen(true);
                        searchRef.current.focus();
                    }}
                >
                    <span
                        className={`search-wrap ${
                            isDropDownOpen ? "hidden" : ""
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
                {isDropDownOpen ? <SearchMenu /> : null}
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
                <div className="circle-icon hover1">
                    <Menu />
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
            </div>
        </header>
    );
};

export default Header;
