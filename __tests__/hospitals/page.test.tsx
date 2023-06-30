import HospitalsPage from "@/app/hospitals/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home page", () => {
  it("renders properly", () => {
    render(<HospitalsPage />);

    // check if all components are rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();
    
  });
});
