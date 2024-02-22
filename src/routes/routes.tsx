import Home from "../components/home/home"
import Details from "../components/details/details"

interface routePaths {
	path: string,
	main: () => JSX.Element;
}

export const routesPaths: routePaths[] = [
	{
		path: '/',
		main: () => <Home />
	},
	{
		path: '/details',
		main: () => <Details />
	},
]