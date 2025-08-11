import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import CVPage from "./CVPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/cv" element={<CVPage />} />
            </Routes>
        </Router>
    );
}
