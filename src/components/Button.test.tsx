import React from "react";
import { test } from "@jest/globals"
import { render } from "@testing-library/react"
import Button from "./Button";

test("testing button component", () => {
	render(<Button/>)
})