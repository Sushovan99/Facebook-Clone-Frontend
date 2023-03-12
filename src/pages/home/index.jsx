import Header from "../../components/Header";
import { LeftContent } from "../../components/Home/LeftMenu";
import "./style.css";

export const HomePage = () => {
    return (
        <div className="page-container">
            <Header />
            <div className="home-page-content-container">
                <LeftContent />
            </div>
        </div>
    );
};
