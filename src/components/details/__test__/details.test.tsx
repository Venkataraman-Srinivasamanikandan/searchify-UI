import { fireEvent, render, screen } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Details from "../details";

describe("Details page", () => {
	const initialState = {
		country: {
			country_id: ""
		}
	}
	test("Load Details page without country_id", () => {
		const mockStore = configureStore([]);
		const storeData = mockStore(initialState);
		render(
			<Router>
				<Provider store={storeData}>
					<Details />
				</Provider>
			</Router>
		)
	})
	// test("Load Details page with country_id", () => {
	// 	const mockStore = configureStore([]);
	// 	const newInitialState = { ...initialState };
	// 	newInitialState.country.country_id = "65d6ce26cfca75e1b7f231ea"
	// 	const storeData = mockStore(initialState);
	// 	jest.mock('../../../api/utils', () => ({
	// 		...jest.requireActual('../../../api/utils'),
	// 		get: () => {
	// 			Promise.resolve([{
	// 				_id: "string",
	// 				country_id: "string",
	// 				image: "string",
	// 				title: "string",
	// 				description: "string"
	// 			}])
	// 		}
	// 	}))
	// 	render(
	// 		<Router>
	// 			<Provider store={storeData}>
	// 				<Details />
	// 			</Provider>
	// 		</Router>
	// 	)
	// })
})