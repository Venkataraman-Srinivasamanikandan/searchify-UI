import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CountryState {
	country_id: string
}

const initialState: CountryState = {
	country_id: ""
}

const countrySlice = createSlice({
	name: "country",
	initialState,
	reducers: {
		store: (state, action: PayloadAction<string>) => {
			state.country_id = action.payload;
		}
	},
});

export const { store } = countrySlice.actions;

export default countrySlice.reducer;