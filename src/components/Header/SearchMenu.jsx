import { Link } from "react-router-dom";

const SearchMenu = () => {
    return (
        <div className="search-menu">
            <div className="search-history-header">
                <h4>Recent searches</h4>
                <Link to={"#"} className="search-edit hover2">
                    Edit
                </Link>
            </div>
            <div className="search-history"></div>
        </div>
    );
};

export default SearchMenu;
