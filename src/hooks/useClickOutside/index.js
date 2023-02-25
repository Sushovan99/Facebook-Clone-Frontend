import { useEffect } from "react";

export const useClickOutside = (ref, func) => {
    useEffect(() => {
        const clickHandler = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            func();
        };

        document.addEventListener("mousedown", clickHandler);
        return () => {
            document.removeEventListener("mousedown", clickHandler);
        };
    }, [ref, func]);
};
