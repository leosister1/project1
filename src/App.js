import { Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminRoute from "./routes/AdminRoute";
import LoginRoute from "./routes/LoginRoute";
import GuestRoute from "./routes/GuestRoute";
import Home from "./page/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                <Route element={<GuestRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* 로그인이 필요한 페이지 */}
        <Route element={<LoginRoute />}>
        </Route>

        {/* 관리자 권한이 필요한 페이지 */}
        <Route element={<AdminRoute />}>
        </Route>
                </Routes>
        </BrowserRouter>       
    );
}  