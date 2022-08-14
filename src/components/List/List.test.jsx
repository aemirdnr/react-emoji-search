import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./List";

test("does load the emojis", () => {
  render(<List />);
  const emojiList = screen.getByTestId("emoji__list");
  expect(emojiList).toBeInTheDocument();
});
