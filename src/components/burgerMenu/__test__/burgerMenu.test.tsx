import { fireEvent, render, screen } from "@testing-library/react";
import BurgerMenu from "../burgerMenu";

describe("Burger Menu", () => {
	test("Load Burger menu", () => {
		render(<BurgerMenu openMenu={true} setOpenMenu={jest.fn()} />)
	})
	test("Close Burger menu", () => {
		render(<BurgerMenu openMenu={true} setOpenMenu={jest.fn()} />)
		const closeBtn = screen.getByTestId("closeBurgerMenu")
		fireEvent.click(closeBtn)
	})
})