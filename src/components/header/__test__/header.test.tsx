import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../header";

describe("Header Menu", () => {
	test("Load Header menu", () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)
		const menuIconBtn = screen.getByTestId("menuIcon")
		fireEvent.click(menuIconBtn)
		const getidViewBtn = screen.getByTestId("getidView")
		fireEvent.click(getidViewBtn)
	})
})