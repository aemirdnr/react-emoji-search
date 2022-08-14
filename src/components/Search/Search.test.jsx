import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./Search";

test("does filter input works", () => {
  render(<Search />);
  const searchInput = screen.getByPlaceholderText("Emoji...");
  expect(searchInput.value).toBe("");
});
