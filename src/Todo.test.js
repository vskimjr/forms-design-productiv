import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("todo component", function () {
  it("renders todo without crashing", function () {
    render(<Todo
      id="testID"
      title="testTitle"
      description="testDescription"
      priority={1}
    />);
  })
  it("contains expected info", function () {
    const {debug, container} = render(<Todo
      id="testID"
      title="testTitle"
      description="testDescription"
      priority={1}
    />);
    expect(container).toContainHTML("testTitle");
    expect(container).toContainHTML("testDescription");
    expect(container).toContainHTML("1");
  })
});