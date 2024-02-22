import { render } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RouterIndex from "../routeIndex";

describe("Rotues", () => {
	const initialState = {
		country: {
			country_id: ""
		}
	}
	test("Render Routes", () => {
		const mockStore = configureStore([]);
		const storeData = mockStore(initialState);
		render(
			<MemoryRouter>
				<Provider store={storeData}>
					<RouterIndex />
				</Provider>
			</MemoryRouter>
		)
	})
})