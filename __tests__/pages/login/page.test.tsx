import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/app/login/page";

describe("Login page", () =>
  it("should render properly", () => {
    const { container } = render(<Login />);

    // const heading = screen.getByRole("heading", {
    //   name: /Welcome back/i,
    // });

    // expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  }));
