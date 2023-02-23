import { Link } from "react-router-dom";
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
} from "../../svg";
import "./style.css";

const Header = () => {
    const color = "#65676b";
    return (
        <header className="header">
            <div className="header-left">
                <Link to="/">
                    <div className="header-logo">
                        <div className="circle-icon">
                            <Logo />
                        </div>
                    </div>
                </Link>
                <div className="search header-search">
                    <Search color={color} />
                    <input
                        type="text"
                        placeholder="Search Facebook"
                        className="header-hide-input"
                    />
                </div>
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

                <Link to="/profile" className="header-profile hover1">
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
