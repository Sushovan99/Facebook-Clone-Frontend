import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function NotLoggedInRoute() {
    const user = useSelector((state) => state.user.user);
    return user ? <Navigate to={"/"} /> : <Outlet />;
}
