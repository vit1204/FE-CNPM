import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";

test("initial state is not active", () => {
  const { container } = render(Login);
  const containerElement = container.querySelector(".container");
  expect(containerElement).not.toHaveClass("active");
});

test("toggleActive function toggles active class", () => {
  const { container, getByText } = render(<Login />);
  const containerElement = container.querySelector(".container");
  const registerLink = getByText("create an account");

  // Initial state should not be active
  expect(containerElement).not.toHaveClass("active");

  // Click the register link to activate
  fireEvent.click(registerLink);
  expect(containerElement).toHaveClass("active");

  // Click the back button to deactivate
  const backButton = container.querySelector("#back-btn");
  fireEvent.click(backButton);
  expect(containerElement).not.toHaveClass("active");
});
