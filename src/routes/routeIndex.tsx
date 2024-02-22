import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { routesPaths } from "./routes";

const Layout = () => (
	<>
		<Header />
		<div className="layoutContainer">
			<Outlet />
		</div>
		<Footer />
	</>
)

const RouterIndex = () => {

	const getRoutes = () => (
		<Route element={<Layout />}>
			{
				routesPaths.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.main />}
					/>
				))
			}
			< Route
				path="/*"
				element={<Navigate to={routesPaths[0]?.path || ""} replace />}
			/>
		</Route>
	)

	return (
		<Routes>
			{getRoutes()}
		</Routes>
	)
}

export default RouterIndex