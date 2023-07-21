import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostBlog from "@/app/postBlog/page";

describe("Hospitals page", () =>
  it("render properly", () => {
    render(<PostBlog />);

    const header = screen.getByRole("heading");
    const headerText = "Tell your Story";
    expect(header).toHaveTextContent(headerText);
  }));
