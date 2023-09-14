import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Mensagem from "./pages/Mensagem"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Mensagem" element={<Mensagem/>} />
        </Routes>
    )
}

export default Router