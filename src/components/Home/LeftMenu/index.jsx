import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowDown1, LinkedIn } from "../../../svg";
import { leftLinkContent } from "../../../data/home";
import { useState } from "react";
import { LeftLink } from "./LeftLink";
import "./style.css";

export const LeftContent = () => {
    const user = useSelector((state) => state.user.user);
    const [showMore, setShowMore] = useState(false);
    const { VITE_DEV_INFO } = import.meta.env;

    return (
        <div className="home-left-container scrollbar">
            <Link to={"/profile"} className="home-left-row hover3">
                <img src={user.picture} alt="avatar" className="avatar" />
                <h4>
                    {user.firstName} {user.lastName}
                </h4>
            </Link>

            {leftLinkContent.slice(0, 6).map((link, index) => (
                <LeftLink
                    key={`${index}-${link.text}`}
                    img={link.img}
                    text={link.text}
                />
            ))}

            {showMore
                ? leftLinkContent
                      .slice(6, leftLinkContent.length)
                      .map((link, index) => (
                          <LeftLink
                              key={`${index}-${link.text}`}
                              img={link.img}
                              text={link.text}
                          />
                      ))
                : null}

            <button
                className="home-left-row hover3"
                onClick={() => setShowMore((prev) => !prev)}
            >
                <span className={`see-more-btn ${showMore ? "active" : ""}`}>
                    <ArrowDown1 />
                </span>
                <p>See more</p>
            </button>

            <hr
                className="divider"
                style={{ marginBlock: "6px", backgroundColor: "#dadadd" }}
            />

            <div className="home-left-shortcuts">
                <h4>Your shortcuts</h4>
                <a
                    href={VITE_DEV_INFO}
                    className="home-left-row hover3"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedIn />

                    <h4>Developer info</h4>
                </a>
            </div>
        </div>
    );
};
