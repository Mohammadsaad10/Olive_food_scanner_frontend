import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("HomePage layout", () => {
  it("renders hero heading", () => {
    render(<HomePage />);
    expect(screen.getByText(/The Safest Way to Shop for Groceries/i)).toBeInTheDocument();
  });
});
