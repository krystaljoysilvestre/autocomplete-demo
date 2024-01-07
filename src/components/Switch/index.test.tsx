import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Switch from "./index";

import "@testing-library/jest-dom";

test("renders Switch component", () => {
  const onChangeMock = jest.fn();
  const { queryByText } = render(
    <Switch label="Enable Feature" onChange={onChangeMock} />
  );

  const switchLabel = queryByText("Enable Feature");
  expect(switchLabel).toBeInTheDocument();

  const switchElement = queryByText("Enable Feature")!.closest(".switch");
  waitFor(() => {
    expect(switchElement!).toHaveClass("off");

    fireEvent.click(switchElement!);
    expect(onChangeMock).toHaveBeenCalledWith(true);
    expect(switchElement).toHaveClass("on");
  });
});
