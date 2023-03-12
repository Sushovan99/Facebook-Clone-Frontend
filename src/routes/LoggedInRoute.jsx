import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { LoginPage } from "../pages/login";

export default function LoggedInRoutes() {
    const user = useSelector((state) => state.user.user);
    return user ? <Outlet /> : <LoginPage />;
}
