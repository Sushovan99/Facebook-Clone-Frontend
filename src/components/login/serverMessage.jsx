import React from "react";

const ServerMessage = ({ serverMessage, alignment }) => {
    return (
        <div
            style={{
                textAlign: alignment ? alignment : "left",
                fontSize: "1.5rem",
            }}
        >
            <span
                style={{
                    color:
                        serverMessage.status === "success"
                            ? "var(--green-color)"
                            : "var(--error-bg)",
                }}
            >
                {serverMessage.message}
            </span>
        </div>
    );
};

export default React.memo(ServerMessage);
