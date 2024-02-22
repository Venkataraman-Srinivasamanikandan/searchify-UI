import { render } from "@testing-library/react";
import Card from "../card";

describe("Card", () => {
	test("Load Cards", () => {
		const result = {
			_id: "string",
			country_id: "string",
			image: "string",
			title: "string",
			description: "string"
		}
		render(
			<Card result={result} />
		)
	})
})