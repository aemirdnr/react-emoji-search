import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

test("does load header correctly", () => {
  render(<Header />);
  const headerText = screen.getByText("Emoji Search");
  expect(headerText).toBeInTheDocument();
});
