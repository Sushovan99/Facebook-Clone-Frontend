import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, ProfilePage, HomePage } from "./pages";
import LoggedInRoute from "./routes/LoggedInRoute";
import NotLoggedInRoute from "./routes/NotLoggedInRoute";

import "./styles/icons/icons.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<LoggedInRoute />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route element={<NotLoggedInRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
