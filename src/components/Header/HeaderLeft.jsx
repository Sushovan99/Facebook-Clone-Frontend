import { Link } from "react-router-dom";
import { Logo, Return, Search } from "../../svg";
import SearchMenu from "./SearchMenu";

export const HeaderWithSearch = ({
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

export const HeaderWithLogo = ({
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
                    id="header-logo-input"
                />
            </div>
        </div>
    );
};
