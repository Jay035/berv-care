import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import { render, screen } from "@testing-library/react";

describe("Home page", () => {
  it("should render hero section properly", () => {
    const { container } = render(<HeroSection />);
    const heading = screen.getByRole("heading", {
      name: /Your Pathway to Trusted Care Providers/i,
    });

    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render how it works section properly", () => {
    const { container } = render(<HowItWorks />);
    expect(container).toMatchSnapshot();
  });

  
});
