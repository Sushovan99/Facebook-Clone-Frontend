import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, ProfilePage, HomePage } from "./pages";
import "./styles/icons/icons.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
