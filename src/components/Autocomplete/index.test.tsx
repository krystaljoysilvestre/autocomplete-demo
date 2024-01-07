import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Autocomplete from "./index";

import "@testing-library/jest-dom";

const suggestions = ["apple", "banana", "orange", "grape", "kiwi"];

test("renders Autocomplete component", () => {
  const { queryByText, getByPlaceholderText } = render(
    <Autocomplete suggestions={suggestions} />
  );
  const inputElement = getByPlaceholderText("Search");

  expect(inputElement).toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "apple" } });

  expect(queryByText("apple")).toBeInTheDocument();
  expect(queryByText("banana")).not.toBeInTheDocument();
  expect(queryByText("orange")).not.toBeInTheDocument();
  expect(queryByText("grape")).not.toBeInTheDocument();
  expect(queryByText("kiwi")).not.toBeInTheDocument();
});
