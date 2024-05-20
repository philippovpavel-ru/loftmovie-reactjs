import { react, screen } from "@testing-library/react";
import { Page } from "src/components/Page";
import { ThemeContextProvider } from "src/ThemeContext";
import "@testing-library/jest-dom";

test("renders with light styles for light theme", () => {
  render(<Page />, {
    wrapper: ({ chilren }) => (
      <ThemeContextProvider initialTheme="light">
        {chilren}
      </ThemeContextProvider>
    ),
  });

  const pageElement = screen.getByTestId("page");

  expect(pageElement).toHaveClass("page theme-light");
});

test("renders with dark styles for dark theme", () => {
  render(<Page />, {
    wrapper: ({ chilren }) => (
      <ThemeContextProvider initialTheme="dark">{chilren}</ThemeContextProvider>
    ),
  });

  const pageElement = screen.getByTestId("page");

  expect(pageElement).toHaveClass("page theme-dark");
});
