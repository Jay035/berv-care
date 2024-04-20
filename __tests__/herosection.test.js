import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroSection from "../components/HeroSection";

describe("Herosection", () => {
  it("renders a heading", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("heading", { level: 1 });
    const button = screen.getByTestId("get-started-btn");

    expect(button).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
  
  //   it("renders a button", () => {
  //  render
  //   })
});
