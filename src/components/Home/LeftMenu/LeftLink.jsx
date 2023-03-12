export const LeftLink = ({ img, text }) => {
    return (
        <>
            <div className="home-left-row hover3">
                <img src={`/left/${img}.png`} alt={text} className="avatar" />
                <p style={{ fontWeight: 600, fontSize: "1.4rem" }}>{text}</p>
            </div>
        </>
    );
};
