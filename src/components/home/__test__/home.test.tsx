import { fireEvent, render, screen } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "../home";

describe("Home page", () => {
	const initialState = {
		country: {
			country_id: ""
		}
	}
	test("Load Home page", () => {
		const mockStore = configureStore([]);
		const storeData = mockStore(initialState);
		render(
			<Router>
				<Provider store={storeData}>
					<Home />
				</Provider>
			</Router>
		)
	})
})