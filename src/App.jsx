import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Home";
import Lodging from "./Pages/Lodging/Lodging";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/kasa-lodging-practice-website/' element={<Home />}></Route>
					<Route path='/kasa-lodging-practice-website/lodging/:id' element={<Lodging />}></Route>
					<Route path='/kasa-lodging-practice-website/about' element={<About />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
