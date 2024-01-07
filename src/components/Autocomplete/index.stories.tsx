import React from "react";
import Autocomplete from "./index";

export default {
  title: "Autocomplete",
  component: Autocomplete,
};

const suggestions = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

export const Basic = () => <Autocomplete suggestions={suggestions} />;
