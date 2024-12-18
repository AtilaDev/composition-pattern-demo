import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "./index";

describe("Card Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Card>Test Content</Card>);
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("applies default variant classes", () => {
    const { container } = render(<Card>Test Content</Card>);
    expect(container.firstChild).toHaveClass("bg-white shadow-sm");
  });

  it("applies outlined variant classes", () => {
    const { container } = render(<Card variant="outlined">Test Content</Card>);
    expect(container.firstChild).toHaveClass("bg-white border border-gray-200");
  });

  it("applies elevated variant classes", () => {
    const { container } = render(<Card variant="elevated">Test Content</Card>);
    expect(container.firstChild).toHaveClass("bg-white shadow-md");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Card className="custom-class">Test Content</Card>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders CardHeader component", () => {
    const { getByText } = render(
      <Card>
        <Card.Header>Header Content</Card.Header>
      </Card>
    );
    expect(getByText("Header Content")).toBeInTheDocument();
  });

  it("renders CardBody component", () => {
    const { getByText } = render(
      <Card>
        <Card.Body>Body Content</Card.Body>
      </Card>
    );
    expect(getByText("Body Content")).toBeInTheDocument();
  });

  it("renders CardFooter component", () => {
    const { getByText } = render(
      <Card>
        <Card.Footer>Footer Content</Card.Footer>
      </Card>
    );
    expect(getByText("Footer Content")).toBeInTheDocument();
  });
});
