import HeroSection from "@/components/HeroSection";
import { render, screen } from "@testing-library/react";

describe("Hero section", () => {
  it("should render hero section properly", () => {
    const { container } = render(<HeroSection />);
    const heading = screen.getByRole("heading", {
      name: /Your Pathway to Trusted Care Providers/i,
    });

    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
