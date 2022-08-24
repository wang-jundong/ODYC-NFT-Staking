import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Stake from "../pages/stake";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/stake" element={<Stake />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
