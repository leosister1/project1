import { Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
        </BrowserRouter>       
    );
}  