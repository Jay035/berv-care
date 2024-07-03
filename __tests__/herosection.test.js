import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroSection from "../components/HeroSection";

describe("Herosection", () => {
  it("renders hero content", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("heading", { level: 1 });
    const subText = screen.getByTestId("hero-subtext");
    const button = screen.getByTestId("get-started-btn");

    expect(heading).toBeInTheDocument();
    expect(subText).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

 
});
