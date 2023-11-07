import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/index"
import Aulas from "./pages/Aulas/index"
import Horarios from "./pages/Horarios/index"
import Calendario from "./pages/Aulas/index"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Aulas" element={<Aulas />} />
                <Route path="/Horarios" element={<Horarios />} />
                <Route path="/Calendario" element={<Calendario />} />
			</Routes>
		</BrowserRouter>
	)
}